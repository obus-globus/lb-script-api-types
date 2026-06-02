import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MessageLevel } from '../../../../../../net/caffeinemc/mods/sodium/client/console/message/MessageLevel.d.ts'
export interface ConsoleSink extends Object{
    logMessage(arg0: MessageLevel, arg1: string, arg2: boolean, arg3: number): void;
}