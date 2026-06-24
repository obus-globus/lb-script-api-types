import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$FallbackProvider } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$FallbackProvider.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { CustomPacketPayload$TypeAndCodec } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$TypeAndCodec.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class CommonRegisterPayload extends Record implements CustomPacketPayload {
    static CODEC: StreamCodec<FriendlyByteBuf, CommonRegisterPayload>;
    static CONFIGURATION_PROTOCOL: string;
    static PLAY_PROTOCOL: string;
    static TYPE: CustomPacketPayload$Type<CommonRegisterPayload>;
    static codec(paramwriter: (param0: CustomPacketPayload | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => CustomPacketPayload | null): StreamCodec<ByteBuf, CustomPacketPayload>;
    static codec(paramfallback: CustomPacketPayload$FallbackProvider<FriendlyByteBuf>, paramtypes: CustomPacketPayload$TypeAndCodec<any, any>[]): StreamCodec<FriendlyByteBuf, CustomPacketPayload>;
    static createType(paramid: string): CustomPacketPayload$Type<CustomPacketPayload>;
    constructor(version: number, protocol: string, channels: Identifier[])
    private constructor(arg0: FriendlyByteBuf)
    // private channels: Identifier[];
    // private protocol: string;
    // private version: number;
    channels(): Identifier[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    protocol(): string;
    toString(): string;
    type(): CustomPacketPayload$Type<CommonRegisterPayload>;
    version(): number;
    write(arg0: FriendlyByteBuf): void;
}