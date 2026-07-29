import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { PlacementRenderer } from '../../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
/**
 * VoidESP module
 *
 * Highlight all surrounding positions that may be void.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleVoidESP.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleVoidESP.kt:42}
 */
export class ModuleVoidESP extends ClientModule {
    static INSTANCE: ModuleVoidESP;
    readonly baseKey: string;
    // private lastTickPositions: (Object | null)[];
    // private posEnd: BlockPos$MutableBlockPos;
    // private posStart: BlockPos$MutableBlockPos;
    // private rangeFacing: number;
    // private /*not mapped: */ getRangeFacing(): number;
    // private rangeSide: number;
    // private /*not mapped: */ getRangeSide(): number;
    // private renderer: PlacementRenderer;
    // private tickHandler: EventHook<PlayerTickEvent>;
    // private yThreshold: number;
    // private /*not mapped: */ getYThreshold(): number;
    onDisabled(): void;
    // private search(): (Object | null)[];
}