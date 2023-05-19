package com.societe.employee.controller;

import java.io.File;
import java.io.FileInputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.servlet.ServletContext;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.societe.employee.models.Employee;
import com.societe.employee.repositories.EmployeeRepository;
import com.societe.employee.services.EmployeeService;
import com.societe.employee.servicesImpl.Response;

@CrossOrigin("*") 
@RestController
@RequestMapping("api")
public class employeeController {
	@Autowired ServletContext context;
	@Autowired
	protected EmployeeRepository CL;
	@Autowired
	private EmployeeService employeeService;
	@GetMapping("/Employees")
	  public List<Employee> getAllEmployees() {

	 
	    List<Employee> e = new ArrayList<>();
	    CL.findAll().forEach(e::add);
	 
	    return e;
	  }
	 
	 @GetMapping ("/getAll")
	 public ResponseEntity<List<String>> getAll()
	 {
		 List<String> listArt = new ArrayList<String>();
		 String filesPath = context.getRealPath("/Images");
		 File filefolder = new File(filesPath);
		 if (filefolder != null)
		 {
			for (File file :filefolder.listFiles())
			{
				if(!file.isDirectory())
				{
				  String encodeBase64 = null;
				  try {
					  String extension = FilenameUtils.getExtension(file.getName());
					  FileInputStream fileInputStream = new FileInputStream(file);
				      byte[] bytes = new byte[(int)file.length()];
				      fileInputStream.read(bytes);
				      encodeBase64 = Base64.getEncoder().encodeToString(bytes);
				      listArt.add("data:image/"+extension+";base64,"+encodeBase64);
				      fileInputStream.close();
				      
				      
				  }catch (Exception e){
					  
				  }
				}
			}
		 }
		 return new ResponseEntity<List<String>>(listArt,HttpStatus.OK);
	 }
	

	 
	 
	
	 @PostMapping(value = "/saveUser")
	 public ResponseEntity<Response> saveUser (@RequestParam("file") MultipartFile file,
			 @RequestParam("user") String user) throws JsonParseException , JsonMappingException , Exception
	 {
		 Employee e = new ObjectMapper().readValue(user, Employee.class);
    
		 e.setPhoto(file.getOriginalFilename());
		 Employee art =CL.save(e);
     
     if (art != null)
     {
     
    
     	return new ResponseEntity<Response>(new Response(""),HttpStatus.OK);
     }
     else
     {
     	return new ResponseEntity<Response>(new Response (" Employee not saved"),HttpStatus.BAD_REQUEST);	
     }
	 }
	 
	 
	 
	 @PostMapping("/Employees")
	 public ResponseEntity<Response> create (@RequestParam("file") MultipartFile file,
			 @RequestParam(value="Employee") String em) throws JsonParseException , JsonMappingException , Exception
	 {
		 System.out.println("Ok .............");
		 Employee arti = new ObjectMapper().readValue(em,Employee.class);
     boolean isExit = new File(context.getRealPath("/Images/")).exists();
     if (!isExit)
     {
     	new File (context.getRealPath("/Images/")).mkdir();
     	System.out.println("mkdir.............");
     }
     String filename = file.getOriginalFilename();
     String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
     File serverFile = new File (context.getRealPath("/Images/"+File.separator+newFileName));
     try
     {
     	System.out.println("Image");
     	 FileUtils.writeByteArrayToFile(serverFile,file.getBytes());
     	 
     }catch(Exception e) {
     	e.printStackTrace();
     }

    
     arti.setPhoto(newFileName);
     Employee art = CL.save(arti);
     if (art != null)
     {
     	return new ResponseEntity<Response>(new Response (""),HttpStatus.OK);
     }
     else
     {
     	return new ResponseEntity<Response>(new Response ("Article not saved"),HttpStatus.BAD_REQUEST);	
     }
	 }
	 
	
		 
			
		
	 
	 @GetMapping(path="/Imgemployees/{id}")
	 public byte[] getPhoto(@PathVariable("id") Long id) throws Exception{
		 Employee  em  = CL.findById(id).get();
		 return Files.readAllBytes(Paths.get(context.getRealPath("/Images/")+em.getPhoto()));
	 }
	
	
	 @PutMapping("/Employees/{EmployeeId}")
		public Employee update(@PathVariable Long EmployeeId ,@RequestBody Employee employees) { 
			return employeeService.update(employees);
		
		}	
		@GetMapping("/Employees/{EmployeeId}")
		public Employee getEmployeesById(@PathVariable Long EmployeeId) { 
			return employeeService.findById(EmployeeId);		 
		}	
			
		
		@DeleteMapping("/Employees/{EmployeeId}")
		public void delete(@PathVariable Long EmployeeId) { 
		  	System.out.println("delete");
			employeeService.delete(EmployeeId);
		}			

}
