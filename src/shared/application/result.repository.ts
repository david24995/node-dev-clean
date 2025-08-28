export interface ResultRepository<T> {
  trace: string;
  payload: { data: T | T[]; total?: number };
}
