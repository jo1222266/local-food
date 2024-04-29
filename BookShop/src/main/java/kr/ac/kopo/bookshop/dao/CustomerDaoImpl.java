package kr.ac.kopo.bookshop.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.ac.kopo.bookshop.model.Customer;

@Repository
public class CustomerDaoImpl implements CustomerDao {
	
	@Autowired
	SqlSession sql;

	@Override
	public List<Customer> list() {		
		return sql.selectList("customer.list");
	}

	@Override
	public void add(Customer item) {
		sql.insert("customer.add", item);
	}

	@Override
	public Customer item(Long custid) {		
		return sql.selectOne("customer.item", custid);
	}

	@Override
	public void update(Customer item) {
		sql.update("customer.update", item);
	}

	@Override
	public void delete(Long custid) {
		sql.delete("customer.delete", custid);
	}

}
