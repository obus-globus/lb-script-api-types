import type { RegistryType } from '../../../../com/viaversion/viaversion/api/minecraft/RegistryType.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { IdRewriteFunction } from '../../../../com/viaversion/viaversion/rewriter/IdRewriteFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StatisticsRewriter<C extends ClientboundPacketType> extends Object {
    constructor(arg0: Protocol<C, Object, Object, Object>)
    // private protocol: Protocol<C, Object, Object, Object>;
    getRegistryTypeForStatistic(arg0: number): RegistryType;
    getRewriter(arg0: RegistryType): (param0: number) => number;
    register(arg0: C): void;
}