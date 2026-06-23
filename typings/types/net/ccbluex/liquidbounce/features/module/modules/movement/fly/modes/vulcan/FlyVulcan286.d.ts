import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockShapeEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
import type { PlayerTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { ClientboundPlayerPositionPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundPlayerPositionPacket.d.ts'
/**
 * @remarks
 * - **Anticheat:** Version 2.8.6
 * - **Tested on:** localhost
 * - ONLY WORKS ON 1.13+ SERVERS
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286.kt:40}
 */
export class FlyVulcan286 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyVulcan286;
    flags: number;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    packet: ClientboundPlayerPositionPacket | null;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    readonly shapeHandler: EventHook<BlockShapeEvent>;
    readonly tickHandler: EventHook<PlayerTickEvent>;
    wait: boolean;
    disable(): void;
    enable(): void;
}