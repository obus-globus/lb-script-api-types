import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PlayerPostTickEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/PlayerPostTickEvent.d.ts'
import type { MinecraftShortcuts } from '../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { MovableRegionScanner } from '../../../../../../net/ccbluex/liquidbounce/utils/block/MovableRegionScanner.d.ts'
import type { HoleManagerSubscriber } from '../../../../../../net/ccbluex/liquidbounce/utils/block/hole/HoleManagerSubscriber.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
export class HoleManager extends Object implements EventListener, MinecraftShortcuts {
    static INSTANCE: HoleManager;
    // private activeModules: HoleManagerSubscriber[];
    // private movableRegionScanner: MovableRegionScanner;
    /*not mapped: */ getMovableRegionScanner$liquidbounce(): MovableRegionScanner;
    // private movementHandler: EventHook<PlayerPostTickEvent>;
    // private playerPos: BlockPos$MutableBlockPos;
    readonly running: boolean;
    children(): EventListener[];
    parent(): EventListener | null;
    subscribe(subscriber: HoleManagerSubscriber): void;
    unregister(): void;
    unsubscribe(subscriber: HoleManagerSubscriber): void;
    // private updateScanRegion(newPlayerPos: BlockPos): void;
}