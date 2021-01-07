package com.info;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class StudentController {

	@Autowired
	StudentService service;
	
	
	  @GetMapping("/student") 
	  public List<Student> getAllBooks() {
	  List<Student> bk = service.getAllStudent(); 
	  return bk;
	  
	  }
	 
	  @GetMapping("/student/{Id}") 
	  public Optional<Student>getStudent(@PathVariable("Id") int Id)
	  { Optional<Student> bk1=service.getStudent(Id); 
	  return bk1;
	  }
	  
	  @PutMapping("/student/{id}")
	  public String updateStudent(@RequestBody Student student,@PathVariable int id)
	  { String msg=service.update(student,id); 
	  return msg;
	  }
	
	
			
			  @PostMapping("/stud") public String insertData(@RequestBody Student student)
			  { service.insert(student); return "Data inserted"; }
			  
			  
			  
			  
			  @DeleteMapping("/student/{id}") public String delete(@RequestBody Student
			  student,@PathVariable int id) { String msg=service.delete(student,id); return
			  msg; }
			 
	 
}
