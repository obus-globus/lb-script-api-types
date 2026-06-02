import type { Object } from '../../java/lang/Object.d.ts'
import type { Logger } from '../../org/slf4j/Logger.d.ts'
export interface ILoggerFactory extends Object{
    getLogger(arg0: string): Logger;
}