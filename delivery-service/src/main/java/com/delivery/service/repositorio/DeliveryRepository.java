package com.delivery.service.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.delivery.service.entidad.Delivery;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery,  Integer>{

	List<Delivery> findByUsuarioId(int usuarioId);
	
}
