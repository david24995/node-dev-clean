export interface BaseRepository<T, U> {
  list(): Promise<T[]>;
  getOne(id: number): Promise<T>;
  getPage(page: number): Promise<T[]>;
  insert(entity: Partial<U>): Promise<T>;
  update(id: number, entity: Partial<T>): Promise<T>;
  delete(id: number): Promise<T>;
}
