package kr.ac.kopo;

import org.springframework.security.crypto.password.PasswordEncoder;

public class PlainPasswordEncoder implements PasswordEncoder {

	@Override
	public String encode(CharSequence rawPassword) {
		return rawPassword.toString();
	}

	@Override
	public boolean matches(CharSequence rawPassword, String encodedPassword) {
		if(encode(rawPassword).equals("kopo" +encodedPassword))
			return true;
		
		return false;
	}

}
