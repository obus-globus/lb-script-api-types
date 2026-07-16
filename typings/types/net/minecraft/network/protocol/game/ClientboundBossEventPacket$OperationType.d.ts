import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { ClientboundBossEventPacket$Operation } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$Operation.d.ts'
export class ClientboundBossEventPacket$OperationType extends Enum<ClientboundBossEventPacket$OperationType> {
    static ADD: ClientboundBossEventPacket$OperationType;
    static REMOVE: ClientboundBossEventPacket$OperationType;
    static UPDATE_NAME: ClientboundBossEventPacket$OperationType;
    static UPDATE_PROGRESS: ClientboundBossEventPacket$OperationType;
    static UPDATE_PROPERTIES: ClientboundBossEventPacket$OperationType;
    static UPDATE_STYLE: ClientboundBossEventPacket$OperationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClientboundBossEventPacket$OperationType;
    static values(): ClientboundBossEventPacket$OperationType[];
    private constructor(reader: (param0: RegistryFriendlyByteBuf) => ClientboundBossEventPacket$Operation)
    // private reader: (param0: RegistryFriendlyByteBuf) => ClientboundBossEventPacket$Operation;
    name(): "ADD" | "REMOVE" | "UPDATE_PROGRESS" | "UPDATE_NAME" | "UPDATE_STYLE" | "UPDATE_PROPERTIES";
}