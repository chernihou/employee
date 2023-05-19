package com.societe.employee.models;





import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Data

@AllArgsConstructor
@Entity
@Table(name="employees")
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = Employee.class)
@ToString(exclude = "departement")
@EqualsAndHashCode(exclude = "departement")
@RequiredArgsConstructor

public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Long id;
	   
	    private String firstName;
	   
	    private String lastName;

	    private String email;
	    private String phone;
	    private String photo;
	    //private LocalDate dob;
	    @Column(name="fonction")
	    private String fonction;
	   @Column(name="salaire")
	    @NotNull
	   private double salaire;
	  
	    
	    @ManyToOne
	    @JoinColumn(name = "iddepartement")
	    private Department departement;

	

}
