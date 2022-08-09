import { Component, OnInit } from '@angular/core';
import { postList } from '../../interface/postList';
import { PostListServiceService } from '../post-list-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  data: postList[] = [
    {
      userId: 0,
      id: 0,
      title: '',
      body: '',
    },
  ];
  err: string = '';
  constructor(private postservice: PostListServiceService) {}

  ngOnInit(): void {
    this.postservice.getData().subscribe({
      next: (result) => {
        this.data = result;
      },
      error: (error) => {
        console.log('error', error);
        this.err = error.message || 'wrong';
      },
      complete: () => console.info('complete'),
    });
  }
}
