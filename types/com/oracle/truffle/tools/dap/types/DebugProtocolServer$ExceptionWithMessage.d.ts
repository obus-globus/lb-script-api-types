import type { Message } from '../../../../../../com/oracle/truffle/tools/dap/types/Message.d.ts'
import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
export class DebugProtocolServer$ExceptionWithMessage extends RuntimeException {
    constructor(debugMessage: Message, message: string)
    readonly debugMessage: Message;
    getDebugMessage(): Message;
}