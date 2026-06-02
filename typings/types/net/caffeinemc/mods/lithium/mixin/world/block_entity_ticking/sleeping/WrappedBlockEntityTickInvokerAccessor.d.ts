import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TickingBlockEntity } from '../../../../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
export interface WrappedBlockEntityTickInvokerAccessor extends Object{
    callSetWrapped(arg0: TickingBlockEntity): void;
    getWrapped(): TickingBlockEntity;
}