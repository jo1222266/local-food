package kr.ac.kopo.bookshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.kopo.bookshop.dao.OrdersDao;
import kr.ac.kopo.bookshop.model.Orders;

@Service
public class OrdersServiceImpl implements OrdersService {
	
	@Autowired
	OrdersDao dao;

	@Override
	public List<Orders> list() {
		return dao.list();
	}

	@Override
	public void add(Orders item) {
		dao.add(item);
	}

	@Override
	public Orders item(Long orderid) {
		return dao.item(orderid);
	}

	@Override
	public void update(Orders item) {
		dao.update(item);
	}

	@Override
	public void delete(Long orderid) {
		dao.delete(orderid);
	}

}
