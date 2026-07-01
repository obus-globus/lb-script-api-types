import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { Vec3 } from '../../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * NCP Clip Fly
 * Allows you to fly on BlocksMC.
 *
 * In order to bypass the second anti-cheat, it is required to enable PingSpoof,
 * which disables certain anti-cheat checks.
 *
 * The concept behind this fly is taken from CrossSine, made by shxp3, which is a fork of LiquidBounce Legacy
 * The code however is not copied as it follows a different approach.
 *
 * @author 1zuna <marco@ccbluex.net>
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/specific/FlyNcpClip.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/specific/FlyNcpClip.kt:54}
 */
export class FlyNcpClip extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyNcpClip;
    // private additionalEntrySpeed: number;
    // private /*not mapped: */ getAdditionalEntrySpeed(): number;
    // private blink: boolean;
    // private /*not mapped: */ getBlink(): boolean;
    // private clipping: number;
    // private /*not mapped: */ getClipping(): number;
    // private damage: boolean;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private fallDamage: boolean;
    // private /*not mapped: */ getFallDamage(): boolean;
    // private maximumDistance: number;
    // private /*not mapped: */ getMaximumDistance(): number;
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    // private shouldLag: boolean;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    // private startPosition: Vec3 | null;
    // private strafe: boolean;
    // private /*not mapped: */ getStrafe(): boolean;
    readonly tickHandler: EventHook<GameTickEvent>;
    // private timer: number;
    // private /*not mapped: */ getTimer(): number;
    // private collidesBottomVertical(): boolean;
    // private collidesVertical(): boolean;
    disable(): void;
}