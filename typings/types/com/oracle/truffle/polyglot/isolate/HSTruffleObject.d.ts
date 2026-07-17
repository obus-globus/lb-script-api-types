import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { GuestContext } from '../../../../../com/oracle/truffle/polyglot/isolate/GuestContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HSTruffleObject extends Object implements TruffleObject {
    static createHostObjectReference(paramhostReferenceId: number, paramcontext: GuestContext): HSTruffleObject;
    private constructor(context: GuestContext, hostReferenceId: number)
    // private context: GuestContext;
    // private hostReferenceId: number;
    getHostReferenceId(): number;
    send(message: Message, args: Object[]): Object;
}