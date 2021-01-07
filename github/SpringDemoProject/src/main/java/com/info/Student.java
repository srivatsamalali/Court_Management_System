package com.info;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student {
	@Id
	 private int Id;
	private String Name;
	private String Address;
	@Override
	public String toString() {
		return "Student [Id=" + Id + ", Name=" + Name + ", Address=" + Address + ", Semester=" + Semester + ", Contact="
				+ Contact + ", Email=" + Email + "]";
	}
	private int Semester;
	private String Contact;
	private String Email;
	public Student() {
		
	}
	public Student(int id, String name, String address, int semester, String contact, String email) {
		
		Id = id;
		Name = name;
		Address = address;
		Semester = semester;
		Contact = contact;
		Email = email;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public int getSemester() {
		return Semester;
	}
	public void setSemester(int semester) {
		Semester = semester;
	}
	public String getContact() {
		return Contact;
	}
	public void setContact(String contact) {
		Contact = contact;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}

}
