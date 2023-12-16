let students = [
    { name: "Bhavani",city: "Bangalore",age: 20,totalmarks: 300 },
    { name: "Shiva",city: "London",age: 30,totalmarks: 350 },
    { name: "Divya",city: "Singapure",age: 32,totalmarks: 230 },
    { name: "Abhi",city: "Pune",age: 22,totalmarks: 345 },
    { name: "Likitha",city: "Andrapradesh",age:24,totalmarks: 289 },
    { name: "Raju",city: "Hyderabadh",age: 25,totalmarks: 250 },
    { name: "Suma",city: "Ratnagiri",age: 27,totalmarks: 280 },
    { name: "Sudeep",city: "Hyderabadh",age: 25,totalmarks: 250 },
    { name: "Thor",city: "Melbourne",age: 20,totalmarks: 300 },
    { name: "Hulk",city: "London",age: 30,totalmarks: 350 },
    { name: "Captain America",city: "Singapure",age: 32,totalmarks: 230 },
    { name: "Ironman",city: "Pune",age: 22,totalmarks: 345 },
    { name: "Hawkeye",city: "Andrapradesh",age:24,totalmarks: 289 },
    { name: "Black Widow",city: "Ratnagiri",age: 27,totalmarks: 280 },
    { name: "Abhi",city: "Astralia",age: 22,totalmarks: 345 },
    { name: "Likitha",city: "Nagpur",age:24,totalmarks: 289 },
    { name: "Bhavani",city: "Bangalore",age: 20,totalmarks: 300 },
    { name: "Shiva",city: "London",age: 30,totalmarks: 350 },
    { name: "Divya",city: "Singapure",age: 32,totalmarks: 230 },
    { name: "Abhi",city: "Pune",age: 22,totalmarks: 345 },
    { name: "Likitha",city: "Andrapradesh",age:24,totalmarks: 289 },
    { name: "Raju",city: "Hyderabadh",age: 25,totalmarks: 250 },
    { name: "Suma",city: "Ratnagiri",age: 27,totalmarks: 280 },
    { name: "Sudeep",city: "Hyderabadh",age: 25,totalmarks: 250 },
    { name: "Thor",city: "Melbourne",age: 20,totalmarks: 300 },
    { name: "Hulk",city: "London",age: 30,totalmarks: 350 },
    { name: "Captain America",city: "Singapure",age: 32,totalmarks: 230 },
    { name: "Ironman",city: "Pune",age: 22,totalmarks: 345 },
    { name: "Hawkeye",city: "Andrapradesh",age:24,totalmarks: 289 },
    { name: "Black Widow",city: "Ratnagiri",age: 27,totalmarks: 280 },
    { name: "Abhi",city: "Astralia",age: 22,totalmarks: 345 },
    { name: "Likitha",city: "Nagpur",age:24,totalmarks: 289 }
];

let filterStudents = students;

let noOfPages = Math.ceil(students.length/8);
console.log(noOfPages);
let currentPage = 1;

// logic for generating
for(let i=1; i<=noOfPages; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;

    btn.addEventListener("click", function(){
        currentPage = i;
        paginate(currentPage);
    })

    document.getElementById("nums").appendChild(btn);
}

document.getElementById("prev").addEventListener("click", function(){
    if(currentPage>1) {
        currentPage--;
        paginate(currentPage);
    }
    
})

document.getElementById("next").addEventListener("click", function(){
    if(currentPage<noOfPages) {
        currentPage++;
        paginate(currentPage);
    }
    
})

document.getElementById("search").addEventListener("keyup", function(){
    let val = document.getElementById("search").value;
    let filterStudents = students.filter(function(student) {
        return student.name.includes(val);
    })

    currentPage=1;
    paginate(1);
})

// initial call
paginate(1);

function paginate(pageNumber) {
    let startIndex = (pageNumber-1)*8;
    let endIndex = startIndex+8;
    let paginatedData = filterStudents.slice(startIndex,endIndex);

    document.getElementById("info").innerText = currentPage+" of "+noOfPages;

    document.getElementById("tbody").innerHTML = "";

    for(let i=0; i< paginatedData.length; i++) {
    let row = document.createElement("tr");

    let slTd = document.createElement("td");
    slTd.innerText = startIndex+i+1;

    let nameTd = document.createElement("td");
    nameTd.innerText = paginatedData[i].name;

    let ageTd = document.createElement("td");
    ageTd.innerText = paginatedData[i].age;

    let cityTd = document.createElement("td");
    cityTd.innerText = paginatedData[i].city;

    let marksTd = document.createElement("td");
    marksTd.innerText = paginatedData[i].totalmarks;

    row.append(slTd, nameTd, ageTd, cityTd, marksTd);

    document.getElementById("tbody").appendChild(row);
}
}

