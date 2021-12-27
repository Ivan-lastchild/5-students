const students = [
    {
      id: 10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
      id: 11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
    },
    {
      id: 12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
    },
    {
      id: 13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
    }
  ];

function averageStudentMark(id) {
    let arr = students.find(index => index.id == id);
    
    let sum = arr.marks.reduce((accum, item) =>{
        return accum + item;
    });

    let average = sum/arr.marks.length;
    console.log(average);
}

averageStudentMark(10);

function averageGroupMark(arr){
  let allMarks =[];
  for (const elem of arr) {
    allMarks = elem.marks.concat();
    console.log(allMarks);
  }

}

averageGroupMark(students);
