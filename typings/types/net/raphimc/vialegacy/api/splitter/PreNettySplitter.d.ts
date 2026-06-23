import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PreNettyPacketType } from '../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class PreNettySplitter extends Object implements StorableObject {
    constructor(arg0: Class<Protocol<any, any, any, any>>, arg1: (param0: number) => PreNettyPacketType)
    // private packetTypeSupplier: (param0: number) => PreNettyPacketType;
    // private protocolClass: Class<Protocol<any, any, any, any>>;
    getPacketType(arg0: number): PreNettyPacketType;
    getProtocolName(): string;
    onRemove(): void;
}