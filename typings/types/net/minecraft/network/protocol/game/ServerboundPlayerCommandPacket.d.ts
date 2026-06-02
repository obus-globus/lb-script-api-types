import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { ServerboundPlayerCommandPacket$Action } from '../../../../../net/minecraft/network/protocol/game/ServerboundPlayerCommandPacket$Action.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ServerboundPlayerCommandPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundPlayerCommandPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    private constructor(input: FriendlyByteBuf)
    constructor(entity: Entity, action: ServerboundPlayerCommandPacket$Action)
    constructor(entity: Entity, action: ServerboundPlayerCommandPacket$Action, data: number)
    readonly action: ServerboundPlayerCommandPacket$Action;
    readonly data: number;
    readonly id: number;
    getAction(): ServerboundPlayerCommandPacket$Action;
    getData(): number;
    getId(): number;
    handle(listener: ServerGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundPlayerCommandPacket>;
    // private write(output: FriendlyByteBuf): void;
}