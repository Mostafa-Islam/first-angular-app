import { Component, Input, output , EventEmitter, Output} from '@angular/core';
type Users = {id: string, avatar: string, name: string};

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
   @Input({required: true}) user!: Users;
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output () select = new EventEmitter();


  // select = output<string>()
  // avatar = input<string>();
  // name = input<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onselectUser() {
    this.select.emit(this.user.id);
  }
}
