import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockShapeEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { Vec3 } from '../../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * @anticheat Vulcan
 * @anticheat Version 2.8.6
 * @testedOn eu.loyisa.cn, anticheat-test.com
 * @note ONLY WORKS ON 1.8 SERVERS
 * @author Nullable
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286MC18.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286MC18.kt:46}
 */
export class FlyVulcan286MC18 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyVulcan286MC18;
    // private autoDisable: boolean;
    // private /*not mapped: */ getAutoDisable(): boolean;
    // private flagPos: Vec3 | null;
    flags: number;
    /**
     * When you flag (any ClientBoundPlayerPositionPacket works),
     * vanilla server stops you. If for some reason your client doesn't
     * receive the packet, the players serverside position will
     * not change when moving. This will provide a "desynced state"
     *
     * While desynced, you can use timer freely, and
     * flagging the ghost block check sets you back to
     * the position you are in while desynced.
     *
     * 1.8 servers spam ClientBoundPlayerPositionPackets
     * so when you flag for ghost block check,
     * it switches the spammed packet to
     * the new position.
     *
     * NOTE: ghost block check works by checking if you
     * are walking on air after walking off of a ledge.
     * This check can be triggered while desynced...
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286MC18.kt#L93 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286MC18.kt:93}
     */
    readonly packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    readonly shapeHandler: EventHook<BlockShapeEvent>;
    readonly tickHandler: EventHook<PlayerTickEvent>;
    // private timer: number;
    // private /*not mapped: */ getTimer(): number;
    enable(): void;
}