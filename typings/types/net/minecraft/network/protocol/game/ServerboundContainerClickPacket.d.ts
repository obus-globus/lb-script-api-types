import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HashedStack } from '../../../../../net/minecraft/network/HashedStack.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { ContainerInput } from '../../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
export class ServerboundContainerClickPacket extends Record implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ServerboundContainerClickPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    // private buttonNum: number;
    // private carriedItem: HashedStack;
    // private changedSlots: Int2ObjectMap<HashedStack>;
    // private containerId: number;
    // private containerInput: ContainerInput;
    // private slotNum: number;
    // private stateId: number;
    buttonNum(): number;
    carriedItem(): HashedStack;
    changedSlots(): Int2ObjectMap<HashedStack>;
    containerId(): number;
    containerInput(): ContainerInput;
    equals(o: Object | null): boolean;
    handle(listener: ServerGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    slotNum(): number;
    stateId(): number;
    toString(): string;
    type(): PacketType<ServerboundContainerClickPacket>;
}