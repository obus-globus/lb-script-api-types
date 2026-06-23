import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { AntiVoidMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidMode.d.ts'
export class AntiVoidBlinkMode extends AntiVoidMode {
    static Companion: Tagged$Companion;
    static INSTANCE: AntiVoidBlinkMode;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    /*not mapped: */ isExempt(): boolean;
    readonly parent: ModeValueGroup<any>;
    // private /*not mapped: */ getRequiresLag(): boolean;
    /**
     * This method is called to discover a safe position to teleport to.
     * In this case, we simply return the last known safe position.
     *
     * TODO: This does not seem to be consistent enough,
     *   so we rather rely on the base {@link discoverRescuePosition} method.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidBlinkMode.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidBlinkMode.kt:51}
     */
    rescue(): boolean;
}