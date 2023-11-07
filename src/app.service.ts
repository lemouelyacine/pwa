import { Injectable } from '@nestjs/common';
import { HelloMessage } from './HelloMessage';
@Injectable()
export class AppService {

  private hello : HelloMessage;
  getHello(name): HelloMessage {
    return {hello: `${name}!`}
  }
}
