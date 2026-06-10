import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RegistryAttribute } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryAttribute.d.ts'
import type { FriendlyByteBuf } from '../../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { CustomPacketPayload } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$FallbackProvider } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$FallbackProvider.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { CustomPacketPayload$TypeAndCodec } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$TypeAndCodec.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class RegistrySyncPayload extends Record implements CustomPacketPayload {
    static CODEC: StreamCodec<FriendlyByteBuf, RegistrySyncPayload>;
    static ID: CustomPacketPayload$Type<RegistrySyncPayload>;
    static codec(paramwriter: (param0: CustomPacketPayload | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => CustomPacketPayload | null): StreamCodec<ByteBuf, CustomPacketPayload>;
    static codec(paramfallback: CustomPacketPayload$FallbackProvider<FriendlyByteBuf>, paramtypes: CustomPacketPayload$TypeAndCodec<Object, Object>[]): StreamCodec<FriendlyByteBuf, CustomPacketPayload>;
    static createType(paramid: string): CustomPacketPayload$Type<CustomPacketPayload>;
    constructor(arg0: Map<Identifier, Object2IntMap<Identifier>>)
    constructor(registryMap: Map<Identifier, Object2IntMap<Identifier>>, registryAttributes: Map<Identifier, RegistryAttribute[]>)
    // private registryAttributes: Map<Identifier, RegistryAttribute[]>;
    // private registryMap: Map<Identifier, Object2IntMap<Identifier>>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    registryAttributes(): Map<Identifier, RegistryAttribute[]>;
    registryMap(): Map<Identifier, Object2IntMap<Identifier>>;
    toString(): string;
    type(): CustomPacketPayload$Type<RegistrySyncPayload>;
    // private write(arg0: FriendlyByteBuf): void;
}