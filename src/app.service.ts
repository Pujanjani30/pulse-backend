import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const key = 'AKIA1234567890123456';
    return key;
  }
}
