import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/posts.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  posts: Post[] = []
  pSub: Subscription
  searchStr = ''

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.getAll().subscribe(posts => {
      this.posts = posts
    })
  }

  remove(id: string) {

  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}
 