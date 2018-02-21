function dayPlan(hours, tasks, duration) {

  let schedule = [];
  let total_task_time = tasks * duration;
  let total_schedule_minutes = hours * 60;
  let breaks = tasks - 1;
  let break_duration = Math.round((total_schedule_minutes - total_task_time) / breaks);

  if (total_task_time > total_schedule_minutes) {
    return "You\'re not sleeping tonight!"
  };


  for (let i = 0; i < tasks * 2 - 1; i++) {
    if (i % 2 == 0) {
      schedule.push(duration);
    } else {
      schedule.push(break_duration);
    }

  }

  return schedule;
}


// Input 1: Hours - Number of hours available to you to get your work done!
// Input 2: Tasks - How many tasks you have to do througout the day
// Input 3: Duration (minutes)- How long each of your tasks will take to complete

// console.log(dayPlan(8, 5, 30));
// console.log(dayPlan(2, 2, 60));
console.log(dayPlan(3, 5, 60));

// [30, 83, 30, 83, 30, 83, 30, 83, 30]);
// [60, 0, 60]);
// 'You\'re not sleeping tonight!');