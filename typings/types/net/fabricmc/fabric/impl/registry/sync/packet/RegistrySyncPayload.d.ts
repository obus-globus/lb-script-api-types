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
    static codec<B extends ByteBuf, T extends CustomPacketPayload>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    static codec<B extends FriendlyByteBuf>(paramfallback: CustomPacketPayload$FallbackProvider<B>, paramtypes: CustomPacketPayload$TypeAndCodec<any, any>[]): StreamCodec<B, CustomPacketPayload>;
    static createType<T extends CustomPacketPayload>(paramid: string): CustomPacketPayload$Type<T>;
    constructor(arg0: Map<Identifier, { [key: string]: any }>)
    constructor(registryMap: Map<Identifier, { [key: string]: any }>, registryAttributes: Map<Identifier, RegistryAttribute[]>)
    // private registryAttributes: Map<Identifier, RegistryAttribute[]>;
    // private registryMap: Map<Identifier, { [key: string]: any }>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    registryAttributes(): Map<Identifier, RegistryAttribute[]>;
    registryMap(): Map<Identifier, { [key: string]: any }>;
    toString(): string;
    type(): CustomPacketPayload$Type<RegistrySyncPayload>;
    // private write(arg0: FriendlyByteBuf): void;
}