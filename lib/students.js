'use strict';

var app = {
  student: {
    all: [],
    new: (function(){
            var counter = 0
            var student = function Student(name, hometown){
              this.name = name;
              this.hometown = hometown;
              var that = this
              // capture this, before the method,
              function initialize() {
                counter++
                that.id = counter;
                app.student.all.push(that);
              };

              initialize();
            }
            return student
          }()),
    findBy: function findBy(attributeHash){
      // attributeHash = {name: 'bob'}
      var key = Object.keys(attributeHash)[0]
      var value = attributeHash[key]
      return $.grep( app.student.all, function(student) {
        return student[key] == value;
      });
    },
  },
  classroom: {
    all: [],
    new: (function(){
            var counter = 0;
            var classroom = function Classroom(subject, difficulty){
              this.subject = subject;
              this.difficulty = difficulty;

              var that = this;
              // capture this, before the method,
              function initialize() {
                counter++
                that.id = counter;
                app.classroom.all.push(that);
              };

              initialize();
            };
            classroom.prototype.students = function(){
              return app.student.findBy({classroom: this})
            };
            return classroom
          }()),
    findBy: function findBy(attributeHash){
      // attributeHash = {name: 'bob'}
      var key = Object.keys(attributeHash)[0]
      var value = attributeHash[key]
      return $.grep( app.classroom.all, function(classroom) {
        return classroom[key] == value;
      });
    }
  }
}
