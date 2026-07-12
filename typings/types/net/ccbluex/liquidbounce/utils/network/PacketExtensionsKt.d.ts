import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientboundEntityEventPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundEntityEventPacket.d.ts'
import type { ClientboundSetEntityMotionPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetEntityMotionPacket.d.ts'
import type { ServerboundMovePlayerPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundMovePlayerPacket.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PacketExtensionsKt extends Object {
    /**
     * In version <= 1.21.11 {@link ServerboundAttackPacket} & {@link ServerboundSpectatorActionPacket}
     * belong to {@link ServerboundInteractPacket}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketExtensions.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketExtensions.kt:75}
     */
    static getEntityIdC2SInteractOrAttack(paramarg0: Packet<any>): number;
    static getPosition(paramarg0: ServerboundMovePlayerPacket): Vec3;
    static isC2SContainerPacket(paramarg0: Packet<any>): boolean;
    /**
     * @see net.minecraft.world.entity.LivingEntity.checkTotemDeathProtection
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketExtensions.kt#L86 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketExtensions.kt:86}
     */
    static isDeathProtection(paramarg0: ClientboundEntityEventPacket): boolean;
    static isLocalPlayerDamage(paramarg0: Packet<any>): boolean;
    static isLocalPlayerVelocity(considerExplosion: Packet<any>): boolean;
    static isLocalPlayerVelocity(paramarg0: Packet<any>, paramarg1: boolean): boolean;
    static isMovementYFallDamage(clientboundSetEntityMotionPacket: ClientboundSetEntityMotionPacket): boolean;
}