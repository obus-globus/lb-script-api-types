import type { Object } from '../../../java/lang/Object.d.ts'
import type { ILoggerFactory } from '../../../org/slf4j/ILoggerFactory.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class NOPLoggerFactory extends Object implements ILoggerFactory {
    constructor()
    getLogger(arg0: string): Logger;
}