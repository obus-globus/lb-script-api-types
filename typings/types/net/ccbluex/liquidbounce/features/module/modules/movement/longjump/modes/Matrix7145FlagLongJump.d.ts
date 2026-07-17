import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * @anticheat Matrix
 * @anticheatVersion 7.14.5
 * @testedOn mc.loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/longjump/modes/Matrix7145FlagLongJump.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/longjump/modes/Matrix7145FlagLongJump.kt:40}
 */
export class Matrix7145FlagLongJump extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: Matrix7145FlagLongJump;
    // private ACCEPTED_AIR_TIME: number;
    // private boostSpeed: number;
    // private /*not mapped: */ getBoostSpeed(): number;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    // private flagTicks: number;
    // private motionY: number;
    // private /*not mapped: */ getMotionY(): number;
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
}