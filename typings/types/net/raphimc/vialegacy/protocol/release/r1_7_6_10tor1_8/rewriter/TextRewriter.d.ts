import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TextRewriter extends Object {
    constructor(arg0: Protocol<any, any, any, any>)
    // private protocol: Protocol<any, any, any, any>;
    toClient(arg0: UserConnection, arg1: string): string;
}