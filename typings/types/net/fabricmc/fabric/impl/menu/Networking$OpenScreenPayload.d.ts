import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$FallbackProvider } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$FallbackProvider.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { CustomPacketPayload$TypeAndCodec } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$TypeAndCodec.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class Networking$OpenScreenPayload<D extends unknown> extends Record implements CustomPacketPayload {
    static CODEC: StreamCodec<RegistryFriendlyByteBuf, Networking$OpenScreenPayload<Object>>;
    static ID: CustomPacketPayload$Type<Networking$OpenScreenPayload<Object>>;
    static codec<B extends ByteBuf, T extends CustomPacketPayload>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    static codec<B extends FriendlyByteBuf>(paramfallback: CustomPacketPayload$FallbackProvider<B>, paramtypes: CustomPacketPayload$TypeAndCodec<any, any>[]): StreamCodec<B, CustomPacketPayload>;
    static createType<T extends CustomPacketPayload>(paramid: string): CustomPacketPayload$Type<T>;
    constructor(identifier: Identifier, containerId: number, title: Component, innerCodec: StreamCodec<RegistryFriendlyByteBuf, D>, data: D)
    // private containerId: number;
    // private data: D;
    // private identifier: Identifier;
    // private innerCodec: StreamCodec<RegistryFriendlyByteBuf, D>;
    // private title: Component;
    containerId(): number;
    data(): D;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): Identifier;
    innerCodec(): StreamCodec<RegistryFriendlyByteBuf, D>;
    title(): Component;
    toString(): string;
    type(): CustomPacketPayload$Type<CustomPacketPayload>;
    // private write(arg0: RegistryFriendlyByteBuf): void;
}