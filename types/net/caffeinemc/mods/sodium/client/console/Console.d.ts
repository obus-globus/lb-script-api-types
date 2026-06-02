import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConsoleSink } from '../../../../../../net/caffeinemc/mods/sodium/client/console/ConsoleSink.d.ts'
import type { Message } from '../../../../../../net/caffeinemc/mods/sodium/client/console/message/Message.d.ts'
import type { MessageLevel } from '../../../../../../net/caffeinemc/mods/sodium/client/console/message/MessageLevel.d.ts'
export class Console extends Object implements ConsoleSink {
    static INSTANCE: Console;
    static instance(): ConsoleSink;
    constructor()
    // private messages: Message[];
    getMessageDrain(): Message[];
    logMessage(arg0: MessageLevel, arg1: string, arg2: boolean, arg3: number): void;
}