import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundGameEventPacket$Type } from '../../../../../net/minecraft/network/protocol/game/ClientboundGameEventPacket$Type.d.ts'
export class ClientboundGameEventPacket extends Object implements Packet<ClientGamePacketListener> {
    static CHANGE_GAME_MODE: ClientboundGameEventPacket$Type;
    static DEMO_EVENT: ClientboundGameEventPacket$Type;
    static DEMO_PARAM_HINT_1: number;
    static DEMO_PARAM_HINT_2: number;
    static DEMO_PARAM_HINT_3: number;
    static DEMO_PARAM_HINT_4: number;
    static DEMO_PARAM_INTRO: number;
    static GUARDIAN_ELDER_EFFECT: ClientboundGameEventPacket$Type;
    static IMMEDIATE_RESPAWN: ClientboundGameEventPacket$Type;
    static LEVEL_CHUNKS_LOAD_START: ClientboundGameEventPacket$Type;
    static LIMITED_CRAFTING: ClientboundGameEventPacket$Type;
    static NO_RESPAWN_BLOCK_AVAILABLE: ClientboundGameEventPacket$Type;
    static PLAY_ARROW_HIT_SOUND: ClientboundGameEventPacket$Type;
    static PUFFER_FISH_STING: ClientboundGameEventPacket$Type;
    static RAIN_LEVEL_CHANGE: ClientboundGameEventPacket$Type;
    static START_RAINING: ClientboundGameEventPacket$Type;
    static STOP_RAINING: ClientboundGameEventPacket$Type;
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundGameEventPacket>;
    static THUNDER_LEVEL_CHANGE: ClientboundGameEventPacket$Type;
    static WIN_GAME: ClientboundGameEventPacket$Type;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(event: ClientboundGameEventPacket$Type, param: number)
    readonly event: ClientboundGameEventPacket$Type;
    readonly param: number;
    getEvent(): ClientboundGameEventPacket$Type;
    getParam(): number;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundGameEventPacket>;
    // private write(output: FriendlyByteBuf): void;
}