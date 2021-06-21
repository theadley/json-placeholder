import * as fromPost from './post.actions';

describe('postPosts', () => {
  it('should return an action', () => {
    expect(fromPost.postPosts().type).toBe('[Post] Post Posts');
  });
});
