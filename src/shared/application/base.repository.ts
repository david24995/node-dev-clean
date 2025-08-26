export interface BaseRepository<T> {
  list(): Promise<T[]>;
  getOne(id: number): Promise<T>;
  getPage(page: number): Promise<T[]>;
  insert(entity: Partial<T>): Promise<T>;
  update(id: number, entity: Partial<T>): Promise<T>;
  delete(id: number): Promise<T>;
}
