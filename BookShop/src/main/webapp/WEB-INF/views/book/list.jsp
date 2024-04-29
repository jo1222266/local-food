<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<jsp:include page="../header.jsp"></jsp:include>
</head>
<body>
	<div class="container">
		<div>
			<h3>도서 목록</h3>
		</div>
		<div>
			<table class="table table-sm table-hover table-striped">
				<thead class="table-dark">
					<tr>
						<th>도서번호</th>
						<th>도서명</th>
						<th>출판사</th>
						<th>가격</th>
						<th>관리</th>
					</tr>
				</thead>
				
				<tbody>
					<c:if test="${list.size() < 1}">
						<tr>
							<td colspan="5">검색 된 도서가 없습니다</td>
						</tr>		
					</c:if>
					
					<c:forEach var="item" items="${list}">
						<tr>
							<td>${item.bookid}</td>
							<td>${item.bookname}</td>
							<td>${item.publisher}</td>
							<td>${item.price}</td>
							<td><a href="update/${item.bookid}" class="btn btn-sm btn-warning"><i class="bi bi-pencil-square"></i></a> <a href="delete/${item.bookid}" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></a></td>
						</tr>
					</c:forEach>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="5">
							<ul class="pagination pagination-sm justify-content-center mt-2">
								<li class="page-item"><a href="?page=1" class="page-link">처음</a></li>
								<li class="page-item"><a href="?page=${pager.prev}" class="page-link">이전</a></li>
								<c:forEach var="page" items="${pager.list}">
									<li class="page-item ${pager.page == page ? 'active' : ''}"><a href="?page=${page}" class="page-link">${page}</a></li>
								</c:forEach>								
								<li class="page-item"><a href="?page=${pager.next}" class="page-link">다음</a></li>
								<li class="page-item"><a href="?page=${pager.last}" class="page-link">마지막</a></li>
							</ul>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
		<div>
			<a href="add"><button class="btn btn-sm btn-primary">등록</button></a>	
			<a href="dummy"><button class="btn btn-sm btn-warning">대량등록</button></a>
			<a href="init"><button class="btn btn-sm btn-danger">초기화</button></a>
			<a href=".."><button class="btn btn-sm btn-secondary">처음으로</button></a>
		</div>
	</div>
</body>
</html>