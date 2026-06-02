import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { ILoggerFactory } from '../../org/slf4j/ILoggerFactory.d.ts'
import type { Logger } from '../../org/slf4j/Logger.d.ts'
export class LoggerFactory extends Object {
    static PROVIDER_PROPERTY_KEY: string;
    static getILoggerFactory(): ILoggerFactory;
    static getLogger(paramarg0: Class<Object>): Logger;
    static getLogger(paramarg0: string): Logger;
    private constructor()
}