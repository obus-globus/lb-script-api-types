import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockShapeEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { AntiVoidMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidMode.d.ts'
export class AntiVoidGhostBlockMode extends AntiVoidMode {
    static Companion: Tagged$Companion;
    static INSTANCE: AntiVoidGhostBlockMode;
    // private handleBlockShape: EventHook<BlockShapeEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    /**
     * We have {@link handleBlockShape} to fix our situation instead.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidGhostBlockMode.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidGhostBlockMode.kt:54}
     */
    rescue(): boolean;
}