We need to have an entire section on javascript patterns that includes 

# Classroom -

## Learning Objectives
  -namespacing with javascript objects
  -private methods
  -private variables
  -object relations in javascript
  -immediately invoked functions

## Lab Objectives


+ Create Students
    + Should have name and hometown.
    + Set Id for the students on initialization.
    + Return an array with all students.

+ Create Classroom
    + Should have subject and difficulty.
    + Set Id for the classroom on initialization.
    + Return an array with all classrooms.

+ Associate Classrooms with Students.
    + Students can have classroom attribute.
    + Should be able to find all students by classroom.



## Instructions

This lab will be a practice in encapsulation with javascript using techniques you will come across in a large scale javascript codebase or library.

1) - I would start off talking about namespacing and directing students to namespace.

I also would test for namespacing.

1) For this lab, we first have to create a students constructor function. A student should have a name and a hometown. Use the same  structure to create a student as given in the example below.
Within this function we will create an initialize function, this will do two things: 
  a) Maintain a counter which is incremented every time a new instance is created. This counter is used to assign IDs to each student.
    i. For the counter, we do not want to add any additional method to the student constructor, but rather have utilize a private variable. See the example below to see how we can use a closure to have a private variable.
  b) Add each new student into an array. eg:- app.students.all => [student1, student2]


2) The student constructor function also needs to have a findBy function. This function will take a key-value pair to find the student. We need to use $.grep function to do this. This function takes in a collection and a function.
Reference -  http://api.jquery.com/jquery.grep/ .


3) We need to make a Classroom constructor the same way we have made the student constructor. This should also have an initialize function and a findBy function.

4) Finally, we need to make an instance method for classroom. This should make the associations between classrooms and students. It should use the findBy function to find students which belong to a classroom.

<!-- I think this example would go in something like a code along ultimately -->
<!-- It's fine for now, because we don't have a code alongs -->
      Eg:-
            var app = {
                cats: {
                  all: [],
                  new: (function(){
                        var counter = 0
                        var cat = function Cat(name, breed){
                          this.name = name;
                          this.breed = breed;

                          var that = this

                          // capture this, before the method,
                          function initialize() {
                            counter++
                            that.id = counter;
                            app.cats.all.push(that);
                          };

                          initialize();
                        }
                        return cat
                      }()),
                    }
                  });

                  var bob = new app.cats.new("Bob", "Persian")
                  bob.breed => "Persian"
