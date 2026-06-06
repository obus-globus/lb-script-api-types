import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { HumanoidArm } from '../../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
/**
 * Hand derp module
 *
 * Switches your main hand.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleHandDerp.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleHandDerp.kt:35}
 */
export class ModuleHandDerp extends ClientModule {
    static INSTANCE: ModuleHandDerp;
    // private currentHand: HumanoidArm;
    // private mode: ModeValueGroup<Mode>;
    // private originalHand: HumanoidArm;
    readonly packetHandler: EventHook<PacketEvent>;
    // private silent: boolean;
    // private /*not mapped: */ getSilent(): boolean;
    // private calculatePlayerPartValue(): number;
    onDisabled(): void;
    // private switchHand(): void;
}