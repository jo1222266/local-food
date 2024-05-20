package kr.ac.kopo.local.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.ac.kopo.local.model.Member;
import kr.ac.kopo.local.model.Recipe;
import kr.ac.kopo.local.service.MemberService;
import kr.ac.kopo.local.service.RecipeService;

@Controller
@RequestMapping("/recipe")
public class RecipeController {
	final String path = "recipe/";
	
	@Autowired
	RecipeService service;
	
	@Autowired
	MemberService memberService;
	
	@GetMapping("/list")
	String list(Model model) {
		List<Recipe> list = service.list();
		
		model.addAttribute("list", list);
		
		return path + "list";
	}
	
	@GetMapping("/detail/{roundkey}") //detail 추가
	String detail(@PathVariable Long roundkey, Model model ) {
		Recipe item = service.item(roundkey);
		
		model.addAttribute("item", item);
		
		return path + "detail";
	}
	
	@GetMapping("/add")
	String add() {
		return path + "add";
	}
	
	@PostMapping("/add")
	String add(@AuthenticationPrincipal Member member, Recipe item) {
		item.setId(member.getId());
		item.setNickname(member.getNickname());
		
		service.add(item);
		
		return "redirect:list";
	}
	
	@GetMapping("/update/{roundkey}")
	String update(@PathVariable Long roundkey, Model model) {
		Recipe item = service.item(roundkey);
		
		model.addAttribute("item", item);
		
		return path +"update";
	}
	
	@PostMapping("/update/{roundkey}")
	String update(@PathVariable Long roundkey, Recipe item) {
		item.setRoundkey(roundkey);
		
		service.update(item);
		
		return "redirect:../list";
	}
	
	@GetMapping("/delete/{roundkey}")
	String delete(@PathVariable Long roundkey) {
		service.delete(roundkey);
		
		return "redirect:../list";
	}
	
}
