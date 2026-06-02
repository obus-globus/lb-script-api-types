import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { AbstractBlockLocationTracker$BlockPos2State } from '../../../../../../net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker$BlockPos2State.d.ts'
import type { BedBlockTracker$Subscriber } from '../../../../../../net/ccbluex/liquidbounce/utils/block/bed/BedBlockTracker$Subscriber.d.ts'
import type { BedState } from '../../../../../../net/ccbluex/liquidbounce/utils/block/bed/BedState.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BedBlockTracker extends AbstractBlockLocationTracker$BlockPos2State<BedState> {
    static INSTANCE: BedBlockTracker;
    // private CACHE: ThreadLocal<BlockPos$MutableBlockPos>;
    // private maxLayers: number;
    // private subscribers: BedBlockTracker$Subscriber[];
    getStateFor(pos: BlockPos, state: BlockState): BedState | null;
    onUpdated(): void;
    subscribe(subscriber: BedBlockTracker$Subscriber): void;
    triggerRescan(): void;
    unsubscribe(subscriber: BedBlockTracker$Subscriber): void;
}