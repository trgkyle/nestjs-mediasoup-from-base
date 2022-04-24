import { Module } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';

import { MediasoupGateway } from './mediasoup.gateway';

@Module({
  imports: [],
  providers: [
    MediasoupGateway,
    {
      provide: LoggerService,
      useValue: new LoggerService('Websocket'),
    }
  ],
})
export class WssModule { }
