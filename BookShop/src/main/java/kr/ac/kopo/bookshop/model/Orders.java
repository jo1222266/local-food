package kr.ac.kopo.bookshop.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class Orders {
	private Long orderid;
	private Long custid;
	private Long bookid;
	private Long saleprice;
	
	@DateTimeFormat(pattern = "yyyy-MM-ddd")
	private Date orderdate;
	
	private String name;
	private String bookname;

	public Long getOrderid() {
		return orderid;
	}

	public void setOrderid(Long orderid) {
		this.orderid = orderid;
	}

	public Long getCustid() {
		return custid;
	}

	public void setCustid(Long custid) {
		this.custid = custid;
	}

	public Long getBookid() {
		return bookid;
	}

	public void setBookid(Long bookid) {
		this.bookid = bookid;
	}

	public Long getSaleprice() {
		return saleprice;
	}

	public void setSaleprice(Long saleprice) {
		this.saleprice = saleprice;
	}

	public Date getOrderdate() {
		return orderdate;
	}

	public void setOrderdate(Date orderdate) {
		this.orderdate = orderdate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBookname() {
		return bookname;
	}

	public void setBookname(String bookname) {
		this.bookname = bookname;
	}

}
