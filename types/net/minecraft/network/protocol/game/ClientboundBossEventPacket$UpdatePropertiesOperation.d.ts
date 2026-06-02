import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ClientboundBossEventPacket$Handler } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$Handler.d.ts'
import type { ClientboundBossEventPacket$Operation } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$Operation.d.ts'
import type { ClientboundBossEventPacket$OperationType } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$OperationType.d.ts'
export class ClientboundBossEventPacket$UpdatePropertiesOperation extends Object implements ClientboundBossEventPacket$Operation {
    private constructor(darkenScreen: boolean, playMusic: boolean, createWorldFog: boolean)
    private constructor(input: RegistryFriendlyByteBuf)
    // private createWorldFog: boolean;
    // private darkenScreen: boolean;
    // private playMusic: boolean;
    dispatch(id: UUID, handler: ClientboundBossEventPacket$Handler): void;
    getType(): ClientboundBossEventPacket$OperationType;
    write(output: RegistryFriendlyByteBuf): void;
}