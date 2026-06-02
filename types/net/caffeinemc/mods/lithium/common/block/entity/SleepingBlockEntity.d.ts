import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { WrappedBlockEntityTickInvokerAccessor } from '../../../../../../../net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping/WrappedBlockEntityTickInvokerAccessor.d.ts'
import type { TickingBlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
export interface SleepingBlockEntity extends Object{
    isSleeping(): boolean;
    lithium$getSleepingTicker(): TickingBlockEntity;
    lithium$getTickWrapper(): WrappedBlockEntityTickInvokerAccessor;
    lithium$setSleepingTicker(arg0: TickingBlockEntity): void;
    lithium$setTickWrapper(arg0: WrappedBlockEntityTickInvokerAccessor): void;
    lithium$startSleeping(): boolean;
    setTicker(arg0: TickingBlockEntity): void;
    sleepOnlyCurrentTick(): void;
    wakeUpNow(): void;
}