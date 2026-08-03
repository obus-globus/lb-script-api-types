import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Protects the surround against being blocked by crystals on destruction.
 *
 * Destroying requires the crystal destroyer in the placer to be active.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt:97}
 */
export class ModuleSurround$Protect extends ToggleableValueGroup {
    static INSTANCE: ModuleSurround$Protect;
    readonly broken: BlockPos[];
    // private minDestroyProgress: number;
    // private /*not mapped: */ getMinDestroyProgress(): number;
    // private tickHandler: EventHook<GameTickEvent>;
}