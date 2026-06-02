import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { RegistryDataRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class RegistryDataRewriter1_21_9 extends RegistryDataRewriter {
    constructor(arg0: Protocol<Object, Object, Object, Object>)
    handleParticleData(arg0: Map$Entry<string, Tag>[]): void;
    trackDimensionAndBiomes(arg0: UserConnection, arg1: string, arg2: RegistryEntry[]): void;
}