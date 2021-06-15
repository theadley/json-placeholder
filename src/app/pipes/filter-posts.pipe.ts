import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../models/post';

@Pipe({
  name: 'filterPosts',
})
export class FilterPostsPipe implements PipeTransform {

  transform(posts: Post[], filterText: string): Post[] {
    // Guards
    if (!posts || posts.length === 0) {
      return [];
    }
    if (!filterText) {
      return posts;
    }

    const filterTextLower = filterText.toLowerCase();
    return posts.filter(post => {
      return post.title.toLowerCase().indexOf(filterTextLower) > -1 ||
        post.body.toLowerCase().indexOf(filterTextLower) > -1;
    });
  }

}
