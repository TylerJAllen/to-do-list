//business logic
function Task(task,date){
  this.task = task;
  this.date = date;
  this.completed = false;
}



//user interface logic
$(function() {
  $("#input-form").submit(function(e){
    e.preventDefault();
    var task = $("#task").val();
    var date = $("#date").val();
    var newTask = new Task(task, date);

    $('#task-input').before('<div class="row task"><div class="col-xs-1 left-col"><input type="checkbox" class="checkbox"></div><div class="col-xs-9"><h4>' + newTask.task + '</h4></div><div class="col-xs-2"><h4>' + newTask.date + '</h4></div></div>');

  });
  $("#remove-task").click(function(){
    $("input[type='checkbox']:checked").each(function(index){
      $(this).parents("div.row").remove();
    });
  });
});
