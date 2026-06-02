import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ClientboundBossEventPacket$Handler } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$Handler.d.ts'
import type { ClientboundBossEventPacket$Operation } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$Operation.d.ts'
import type { ClientboundBossEventPacket$OperationType } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$OperationType.d.ts'
export class ClientboundBossEventPacket$UpdateProgressOperation extends Record implements ClientboundBossEventPacket$Operation {
    // private progress: number;
    dispatch(id: UUID, handler: ClientboundBossEventPacket$Handler): void;
    equals(o: Object | null): boolean;
    getType(): ClientboundBossEventPacket$OperationType;
    hashCode(): number;
    progress(): number;
    toString(): string;
    write(output: RegistryFriendlyByteBuf): void;
}