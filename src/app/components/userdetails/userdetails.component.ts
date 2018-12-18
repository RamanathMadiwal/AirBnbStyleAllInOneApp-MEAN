import {Component, OnInit} from '@angular/core';
import {UserdetailsService} from '../../userdetails.service'
import {UserDetails} from '../../shared/UserDetails';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers: [UserdetailsService]
})

// declare var M: any;
export class UserdetailsComponent implements OnInit {
  userDetails: UserDetails;
  userDetailsContent: any;
  editUserDetails: UserDetails;

  constructor(private userdetailsservice: UserdetailsService) {
  }

  ngOnInit() {
    this.userDetails = new UserDetails();
    this.refreshUserList();
  };

  onSubmit() {
    this.userdetailsservice.addUserDetails(this.userDetails).subscribe((res) => {
      console.log("subscription value-->" + res)
    });
    this.refreshUserList();
  }


  refreshUserList() {
    this.userdetailsservice.getUserDetails().subscribe((res) => {
      console.log("subscription value-->" + res)
      this.userDetailsContent = res;
    });
  }


  onEdit(userDetails) {
    this.userdetailsservice.putUserDetails(userDetails).subscribe((res) => {
      this.refreshUserList();

    });
  }


  edit(user) {
    this.editUserDetails = user;
  }

  update() {
    if (this.editUserDetails) {
      this.userdetailsservice.putUserDetails(this.editUserDetails).subscribe((res) => {
        this.refreshUserList();
      })
    }
  }

  delete(user: UserDetails) {
    this.userDetailsContent = this.userDetailsContent.filter(h => h !== user);
    this.userdetailsservice.deleteUserDetails(user._id).subscribe((res)=>{
      this.refreshUserList();
    });

  }

  // if (this.editTask) {
  //   this.taskService.updateTask(this.editTask).subscribe(task => {
  //     const ix = task ? this.tasks.findIndex(h => h._id === task._id) : -1;
  //     if (ix > -1) {
  //       this.tasks[ix] = task;
  //     }
  //   });
  //   this.editTask = undefined;
  // }
  // }
}
