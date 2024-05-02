package kr.ac.kopo.login.service;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import kr.ac.kopo.login.model.Member;
import kr.ac.kopo.login.model.Role;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public Member loadUserByUsername(String id) throws UsernameNotFoundException {
		System.out.println(id);
		
		Member item = new Member();
		
		item.setId(id);
		
		if("user".equals(id)) {
			String password = passwordEncoder.encode("1234");
			item.setPasswd(password);
			
			Role role = new Role();
			role.setRole("ROLE_BOOK");
			
			item.setRoles(Arrays.asList(role));
			
		} else if("admin".equals(id)) {
			String password = passwordEncoder.encode("5678");
			item.setPasswd(password);
			
			Role role1 = new Role();
			role1.setRole("ROLE_BOOK");
			
			Role role2 = new Role();
			role2.setRole("ROLE_CUSTOMER");
			
			Role role3 = new Role();
			role3.setRole("ROLE_ORDERS");
			
			item.setRoles(Arrays.asList(role1, role2, role3));
		
		} else
				return null;
		
		return item;
	}

}
