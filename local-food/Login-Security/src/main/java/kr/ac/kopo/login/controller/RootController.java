package kr.ac.kopo.login.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kr.ac.kopo.login.model.Member;

@Controller
public class RootController {

	@GetMapping("/")
	String index(@AuthenticationPrincipal Member member, Model model) {
		if(member != null)
		System.out.println(member.getUsername());
		
		model.addAttribute("member", member);
		
		return "index";
	}
	
	@GetMapping("/login")
	String login() {
		return "login";
	}
	
	@GetMapping("/logout")
	String logout(HttpServletRequest req, HttpServletResponse res) {
		var logoutHandler = new SecurityContextLogoutHandler();
		var auth = SecurityContextHolder.getContext().getAuthentication();
		
		logoutHandler.logout(req,  res, auth);
		
		return "redirect:/";
	}
	
}
