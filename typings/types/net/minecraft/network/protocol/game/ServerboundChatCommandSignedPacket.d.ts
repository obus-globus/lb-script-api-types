import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArgumentSignatures } from '../../../../../net/minecraft/commands/arguments/ArgumentSignatures.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { LastSeenMessages$Update } from '../../../../../net/minecraft/network/chat/LastSeenMessages$Update.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
export class ServerboundChatCommandSignedPacket extends Record implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundChatCommandSignedPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(command: string, timeStamp: Instant, salt: number, argumentSignatures: ArgumentSignatures, lastSeenMessages: LastSeenMessages$Update)
    // private argumentSignatures: ArgumentSignatures;
    // private command: string;
    // private lastSeenMessages: LastSeenMessages$Update;
    // private salt: number;
    // private timeStamp: Instant;
    argumentSignatures(): ArgumentSignatures;
    command(): string;
    equals(o: Object | null): boolean;
    handle(listener: ServerGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    lastSeenMessages(): LastSeenMessages$Update;
    salt(): number;
    timeStamp(): Instant;
    toString(): string;
    type(): PacketType<ServerboundChatCommandSignedPacket>;
    // private write(output: FriendlyByteBuf): void;
}