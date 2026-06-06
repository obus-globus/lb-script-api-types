import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientboundEntityEventPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundEntityEventPacket.d.ts'
import type { ClientboundSetEntityMotionPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetEntityMotionPacket.d.ts'
import type { ServerboundMovePlayerPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundMovePlayerPacket.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PacketExtensionsKt extends Object {
    /**
     * In version <= 1.21.11 {@link ServerboundAttackPacket} & {@link ServerboundSpectateEntityPacket}
     * belong to {@link ServerboundInteractPacket}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketExtensions.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketExtensions.kt:69}
     */
    static getEntityIdC2SInteractOrAttack(paramarg0: Packet<Object>): number;
    static getPosition(paramarg0: ServerboundMovePlayerPacket): Vec3;
    static isC2SContainerPacket(paramarg0: Packet<Object>): boolean;
    static isDeathProtection(paramarg0: ClientboundEntityEventPacket): boolean;
    static isLocalPlayerDamage(paramarg0: Packet<Object>): boolean;
    static isLocalPlayerVelocity(considerExplosion: Packet<Object>): boolean;
    static isLocalPlayerVelocity(paramarg0: Packet<Object>, paramarg1: boolean): boolean;
    static isMovementYFallDamage(clientboundSetEntityMotionPacket: ClientboundSetEntityMotionPacket): boolean;
}