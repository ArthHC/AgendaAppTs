package br.com.agenda.persistence.repository;

import br.com.agenda.persistence.entity.ContactEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<ContactEntity, Long> {
}
