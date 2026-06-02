import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ClientboundBossEventPacket$Handler } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$Handler.d.ts'
import type { ClientboundBossEventPacket$OperationType } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$OperationType.d.ts'
export interface ClientboundBossEventPacket$Operation extends Object{
    dispatch(id: UUID, handler: ClientboundBossEventPacket$Handler): void;
    getType(): ClientboundBossEventPacket$OperationType;
    write(output: RegistryFriendlyByteBuf): void;
}