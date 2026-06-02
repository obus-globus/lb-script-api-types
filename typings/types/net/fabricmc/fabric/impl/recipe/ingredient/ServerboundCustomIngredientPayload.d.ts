import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$FallbackProvider } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$FallbackProvider.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ServerboundCustomIngredientPayload extends Record implements CustomPacketPayload {
    static CODEC: StreamCodec<FriendlyByteBuf, ServerboundCustomIngredientPayload>;
    static TYPE: CustomPacketPayload$Type<ServerboundCustomIngredientPayload>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    static codec(paramfallback: CustomPacketPayload$FallbackProvider<Object>, paramtypes: (Object | null)[]): StreamCodec<Object, CustomPacketPayload>;
    static createType(paramid: string): CustomPacketPayload$Type<Object>;
    // private protocolVersion: number;
    // private registeredSerializers: Identifier[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    protocolVersion(): number;
    registeredSerializers(): Identifier[];
    toString(): string;
    type(): CustomPacketPayload$Type<CustomPacketPayload>;
}