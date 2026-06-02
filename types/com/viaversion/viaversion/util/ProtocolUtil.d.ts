import type { State } from '../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProtocolUtil extends Object {
    static packetTypeMap(paramarg0: Class<Object>, paramarg1: Object | null): { [key in State]: Object | null };
    static toNiceHex(paramarg0: number): string;
    static toNiceName(paramarg0: Class<Object>): string;
    constructor()
}