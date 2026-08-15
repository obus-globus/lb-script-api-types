import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * Protects the surround against being blocked by crystals on destruction.
 *
 * Destroying requires the crystal destroyer in the placer to be active.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt:98}
 */
export class ModuleSurround$Protect extends ToggleableValueGroup {
    static INSTANCE: ModuleSurround$Protect;
    readonly broken: (Object | null)[];
    // private minDestroyProgress: number;
    // private /*not mapped: */ getMinDestroyProgress(): number;
    // private tickHandler: EventHook<GameTickEvent>;
}