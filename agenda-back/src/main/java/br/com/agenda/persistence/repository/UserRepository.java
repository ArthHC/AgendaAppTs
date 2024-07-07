package br.com.agenda.persistence.repository;

import br.com.agenda.persistence.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByUserNameAndPassword(String username, String password);

}
