import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClientPacketListener } from '../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
export class DebugQueryHandler extends Object {
    constructor(connection: ClientPacketListener)
    // private callback: (param0: CompoundTag) => void;
    // private connection: ClientPacketListener;
    // private transactionId: number;
    handleResponse(transactionId: number, tag: CompoundTag): boolean;
    queryBlockEntityTag(blockPos: BlockPos, callback: (param0: CompoundTag) => void): void;
    queryEntityTag(entityId: number, callback: (param0: CompoundTag) => void): void;
    // private startTransaction(callback: (param0: CompoundTag) => void): number;
}