package com.societe.employee.models;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data

@AllArgsConstructor
@Entity
@NoArgsConstructor
public class ImageModel {
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Long id;
	    private String name;
	    private String type;
	    @Column(length = 50000000)
	    private byte[] picByte;
}
