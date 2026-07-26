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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketExtensions.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketExtensions.kt:75}
     */
    static getEntityIdC2SInteractOrAttack(paramarg0: Packet<any>): number;
    static getPosition(paramarg0: ServerboundMovePlayerPacket): Vec3;
    static isC2SContainerPacket(self: Packet<any> | null): boolean;
    /**
     * @see net.minecraft.world.entity.LivingEntity.checkTotemDeathProtection
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketExtensions.kt#L86 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketExtensions.kt:86}
     */
    static isDeathProtection(paramarg0: ClientboundEntityEventPacket): boolean;
    static isLocalPlayerDamage(self: Packet<any> | null): boolean;
    static isLocalPlayerVelocity(considerExplosion: Packet<any>): boolean;
    static isLocalPlayerVelocity(self: Packet<any> | null, considerExplosion: boolean): boolean;
    static isMovementYFallDamage(self: ClientboundSetEntityMotionPacket): boolean;
}