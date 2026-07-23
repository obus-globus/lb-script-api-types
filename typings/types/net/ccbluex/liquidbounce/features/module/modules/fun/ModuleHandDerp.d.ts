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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleHandDerp.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleHandDerp.kt:40}
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