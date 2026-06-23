import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Rewritable extends Object{
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): Object;
}