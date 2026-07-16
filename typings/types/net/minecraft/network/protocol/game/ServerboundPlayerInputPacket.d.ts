import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerboundPlayerInputPacketAddition } from '../../../../../net/ccbluex/liquidbounce/additions/ServerboundPlayerInputPacketAddition.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { Input } from '../../../../../net/minecraft/world/entity/player/Input.d.ts'
export class ServerboundPlayerInputPacket extends Record implements ServerboundPlayerInputPacketAddition, Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundPlayerInputPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(input: Input)
    // private input: Input;
    readonly liquidBounce$forceSneak: boolean;
    liquidBounce$forceSneak: boolean;
    equals(o: Object | null): boolean;
    handle(listener: ServerGamePacketListener): void;
    hashCode(): number;
    input(): Input;
    isSkippable(): boolean;
    isTerminal(): boolean;
    liquidBounce$getRawInput(): Input;
    toString(): string;
    type(): PacketType<ServerboundPlayerInputPacket>;
}