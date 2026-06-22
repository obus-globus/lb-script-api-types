import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WrappedBlockEntityTickInvokerAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping/WrappedBlockEntityTickInvokerAccessor.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { TickingBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
export class LevelChunk$RebindableTickingBlockEntityWrapper extends Object implements WrappedBlockEntityTickInvokerAccessor, TickingBlockEntity {
    private constructor(ticker: TickingBlockEntity)
    // private ticker: TickingBlockEntity;
    callSetWrapped(arg0: TickingBlockEntity): void;
    getPos(): BlockPos;
    getType(): string;
    getWrapped(): TickingBlockEntity;
    isRemoved(): boolean;
    // private rebind(ticker: TickingBlockEntity): void;
    tick(): void;
    toString(): string;
}