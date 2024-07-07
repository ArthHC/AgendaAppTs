package br.com.agenda.controller;

import br.com.agenda.persistence.entity.UserEntity;
import br.com.agenda.persistence.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/app-agenda/api/user/")
public class UserController {

    @Autowired
    UserRepository  userRepository;

    @RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
    public List<UserEntity> getAllUnit() {
        List<UserEntity> userList = userRepository.findAll();
        return userList;
    }

    @PostMapping("/")
    public UserEntity addUser(@RequestBody UserEntity user) {
        UserEntity newUser = userRepository.save(user);
        return newUser;
    }

    @PostMapping(value = "/login")
    public HashMap<String, String> getLogin(@RequestBody UserEntity userReq) {
        System.out.println(userReq.getUserName() + " - " + userReq.getPassword());
        UserEntity userEntity = userRepository.findByUserNameAndPassword(userReq.getUserName(), userReq.getPassword());
        boolean status = false;
        String response = new String("");
        if (userEntity != null) {
            response = ("Usuário e senha conferem. Bem vindo");
            status = true;
        } else {
            response = ("Usuário ou senha incorreto.");
        }

       HashMap<String, String> res = new HashMap<String, String>();
        res.put("auth", String.valueOf(status));
        res.put("msg", response);
        return res;
    }

}
