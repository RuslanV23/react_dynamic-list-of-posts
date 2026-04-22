import { Comment } from '../types/Comment';
import { client } from '../utils/fetchClient';

export function getCommentsOfPost(PostId: number): Promise<Comment[]> {
  return client.get<Comment[]>('/comments?postId=' + PostId);
}

export function createComment(comment: Omit<Comment, 'id'>): Promise<Comment> {
  return client.post<Comment>('/comments', comment);
}

export function deleteComment(commentId: number): Promise<unknown> {
  return client.delete(`/comments/${commentId}`);
}
