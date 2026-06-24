import type { Cache } from '../../../../../../com/google/common/cache/Cache.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ItemHasher } from '../../../../../../com/viaversion/viaversion/api/data/item/ItemHasher.d.ts'
import type { CodecContext } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext.d.ts'
import type { StructuredData } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { Protocol1_21_4To1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/Protocol1_21_4To1_21_5.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ItemHashStorage1_21_5 extends Object implements ItemHasher {
    constructor(arg0: Protocol1_21_4To1_21_5, arg1: UserConnection)
    // private context: CodecContext;
    // private hashToStructuredData: Cache<number, StructuredData<Object>>;
    readonly processingClientboundInventoryPacket: boolean;
    dataFromHash(arg0: number, arg1: number): StructuredData<Object>;
    isProcessingClientboundInventoryPacket(): boolean;
    setProcessingClientboundInventoryPacket(arg0: boolean): void;
    trackStructuredData(arg0: StructuredData<Object>): void;
}