package kr.ac.kopo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		String[] permitUri = {"/static/**", "/error", "/", "/login", "/signup"};
		String [] roles = {"BOOK", "CUSTOMER", "ORDERS"};
		
		return http.authorizeHttpRequests(req -> {
							req.requestMatchers(permitUri).permitAll();
							
							for(String role : roles)
								req.requestMatchers("/" + role.toLowerCase() + "/**").hasRole(role);
							// req.requestMatchers("/book/**").hasRole("BOOK");
							// req.requestMatchers("/customer/**").hasRole("CUSTOMER");
							// req.requestMatchers("/orders/**").hasRole("ORDERS");
							
							req.anyRequest().authenticated();
							})
						.formLogin(login -> login
								.loginPage("/login")
								.defaultSuccessUrl("/"))
						.logout(logout -> logout
								.logoutSuccessUrl("/")
								.invalidateHttpSession(true))
						.csrf(csrf -> csrf.disable())
					.build();
	}
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new PlainPasswordEncoder(); 
		// return new BCryptPasswordEncoder();
		}
	
}
