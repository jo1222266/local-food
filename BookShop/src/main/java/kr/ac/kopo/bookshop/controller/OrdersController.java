package kr.ac.kopo.bookshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.ac.kopo.bookshop.model.Book;
import kr.ac.kopo.bookshop.model.Customer;
import kr.ac.kopo.bookshop.model.Orders;
import kr.ac.kopo.bookshop.pager.Pager;
import kr.ac.kopo.bookshop.service.BookService;
import kr.ac.kopo.bookshop.service.CustomerService;
import kr.ac.kopo.bookshop.service.OrdersService;

@Controller
@RequestMapping("/orders")
public class OrdersController {
	private final String path = "orders/";
	
	@Autowired
	OrdersService service;
	
	@Autowired
	BookService bookService;
	
	@Autowired
	CustomerService customerService;
	
	@GetMapping("/list")
	String list(Model model) {
		List<Orders> list = service.list();
		
		model.addAttribute("list", list);
		
		return path + "list";
	}
	
	@GetMapping("/add")
	String add(Model model, Pager pager) {
		pager.setPerPage(0);
		List<Book> books = bookService.list(pager);		
		model.addAttribute("books", books);
		
		List<Customer> customers = customerService.list();		
		model.addAttribute("customers", customers);
		
		return path + "add";
	}
	
	@PostMapping("/add")
	String add(Orders item) {
		service.add(item);
		
		return "redirect:list";
	}

	@GetMapping("/update/{orderid}")
	String update(@PathVariable Long orderid, Model model, Pager pager) {
		Orders item = service.item(orderid);		
		model.addAttribute("item", item);
		
		List<Customer> customers = customerService.list();
		model.addAttribute("customers", customers);

		pager.setPerPage(0);
		List<Book> books = bookService.list(pager);
		model.addAttribute("books", books);
		
		return path + "update";	
	}
	
	@PostMapping("/update/{orderid}")
	String update(Orders item) {
		service.update(item);
		
		return "redirect:../list";
	}
	
	@GetMapping("/delete/{orderid}")
	String delete(@PathVariable Long orderid) {
		service.delete(orderid);

		return "redirect:../list";
	}	
}
