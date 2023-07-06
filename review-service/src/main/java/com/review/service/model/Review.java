package com.review.service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "reseñas")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {

	@Id
	private String reviewId;
	private String titulo;
	private String reseña;
	private int puntuacion;
	
}
