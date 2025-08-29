export interface TraceOptions {
  id: string;
  channelId: number;
  name: string;
}

export interface ResultRepository<T> {
  trace: TraceOptions;
  payload: { data: T | T[]; total?: number };
}
