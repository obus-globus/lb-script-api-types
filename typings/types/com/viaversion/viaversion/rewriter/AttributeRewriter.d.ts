import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AttributeRewriter<C extends ClientboundPacketType> extends Object {
    constructor(arg0: Protocol<C, any, any, any>)
    // private protocol: Protocol<C, any, any, any>;
    register1_21(arg0: C): void;
}