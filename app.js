let taskList = document.getElementById("task_list");



function add(){
    let taskValue =document.getElementById("taskIn").value;
    let task = document.createElement("li");
    let taskinfo =document.createElement("div");
    let content =document.createElement("h4");
    let deleteTask =document.createElement("a");
    let deleteIcon =document.createElement("i");
    let doneTask =document.createElement("a");
    let doneIcon =document.createElement("i");
    deleteIcon.innerHTML=`<i class="fa fa-trash" aria-hidden="true"></i>`;
    doneIcon.innerHTML=`<i class="fa fa-check" aria-hidden="true"></i>`;
    content.innerHTML=taskValue;
    taskList.appendChild(task);
    task.appendChild(taskinfo);
    taskinfo.appendChild(content);
    taskinfo.appendChild(deleteTask);
    taskinfo.appendChild(doneTask);
    deleteTask.appendChild(deleteIcon);
    doneTask.appendChild(doneIcon);
    taskinfo.classList.add("task_info");
    doneTask.setAttribute("margin-left","10px")
    deleteIcon.addEventListener ( "click",deleteFunc );
    //to prevent event propagation i select all parent elements and prevent there event to give the event to the icon only
    function deleteFunc() {
        let elems = document.querySelectorAll("li" ,"div.task_info","h4");
        
        for (elem of elems){
            elem.addEventListener("click",(e)=>{e.preventDefault();})
        };
        taskList.removeChild(task);};
    doneIcon.addEventListener("click",done);
    function done(){
        let elems = document.querySelectorAll("li" ,"div.task_info","h4");
     
        for (elem of elems){
            elem.addEventListener("click",(e)=>{e.preventDefault();})
        };
        
        let doneWord = document.createElement("h4");
        var newContent = document.createTextNode("Done");
        doneWord.appendChild(newContent);
        taskinfo.replaceChild(doneWord,doneTask);
    
    };

}
