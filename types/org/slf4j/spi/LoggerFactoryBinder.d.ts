import type { Object } from '../../../java/lang/Object.d.ts'
import type { ILoggerFactory } from '../../../org/slf4j/ILoggerFactory.d.ts'
export interface LoggerFactoryBinder extends Object{
    getLoggerFactory(): ILoggerFactory;
    getLoggerFactoryClassStr(): string;
}