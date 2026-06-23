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
    /**
     * We have {@link handleBlockShape} to fix our situation instead.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidGhostBlockMode.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidGhostBlockMode.kt:51}
     */
    rescue(): boolean;
}