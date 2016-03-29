'use strict';

describe('app', function() {
  // Create Students

  var newStudent = new app.student.new("Bob","New York")
  var newStudent2 = new app.student.new("Fred","Philly")

 it('creates and returns a new student.', function() {
  expect(newStudent.name).toEqual("Bob")
  expect(newStudent.hometown).toEqual("New York")
})
it('has a counter which sets the id for students.', function() {
  expect(newStudent.id).toEqual(1)
  expect(newStudent2.id).toEqual(2)
})

it('stores all the student objects in an array', function() {
  expect(app.student.all).toEqual([newStudent,newStudent2, newStudent3])
})

it('finds student by attributes', function() {
  expect(app.student.findBy({name: "Bob"})).toEqual([newStudent])
  expect(app.student.findBy({hometown: "Philly"})).toEqual([newStudent2])

})
// Create Classrooms

var newClassroom = new app.classroom.new("Ruby","Medium" );
var newClassroom2 = new app.classroom.new("Javascript","High" );
newClassroom.students(newStudent)

it('creates and returns a new classroom', function() {
  expect(newClassroom.subject).toEqual("Ruby")
  expect(newClassroom.difficulty).toEqual("Medium")

})

it('has a counter which sets the id for classroom.', function() {
  expect(newClassroom.id).toEqual(1)
  expect(newClassroom2.id).toEqual(2)
})

it('stores all the classroom objects in an array', function() {
  expect(app.classroom.all).toEqual([newClassroom,newClassroom2])
})
var newStudent3 = new app.student.new("Bobby","New York",newClassroom)

it('creates and returns a new classroom', function() {
  expect(newClassroom.students()).toEqual([newStudent3])
})

});
