import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TextRewriter extends Object {
    constructor(arg0: Protocol<Object, Object, Object, Object>)
    // private protocol: Protocol<Object, Object, Object, Object>;
    toClient(arg0: UserConnection, arg1: string): string;
}