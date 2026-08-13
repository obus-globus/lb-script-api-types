import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * Explode yourself to fly
 * Takes any kind of damage, preferably explosion damage.
 * Might bypass some anti-cheats.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/FlyGeneric.kt#L189 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/FlyGeneric.kt:189}
 */
export class FlyExplosion extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyExplosion;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    readonly repeatable: EventHook<GameTickEvent>;
    readonly startStrafe: number;
    readonly strafeDecrease: number;
    // private strafeSince: number;
    readonly vertical: number;
    enable(): void;
}