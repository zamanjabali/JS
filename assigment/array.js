let courses = [ 'JS',  'HTML', 'CSS'];

courses[1]= 'React';

courses.push('NodeJS');// add to the end of array
courses.push('Python');

console.log(courses);

let lastCourse = courses.pop();
console.log('Last course: ', lastCourse);

let cousecount = courses.length;
console.log('Course count: ', cousecount);

let j;
console.log('List of courses:', courses);
for(j=0; j<courses.length; j++){
    console.log(courses[j]);
}
