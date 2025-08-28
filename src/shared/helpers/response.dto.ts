import { ResultRepository } from '@shared/application/result.repository';

export class ResponseDto {
  static format<T>(
    trace: string,
    data: T | T[],
    total: number = 0
  ): ResultRepository<T> {
    if (total) {
      return {
        trace,
        payload: {
          data,
          total,
        },
      };
    }
    return {
      trace,
      payload: {
        data,
      },
    };
  }
}
