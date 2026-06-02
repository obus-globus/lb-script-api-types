import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$FallbackProvider } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$FallbackProvider.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class Networking$OpenScreenPayload<D extends Object | number | string | boolean> extends Record implements CustomPacketPayload {
    static CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static ID: CustomPacketPayload$Type<Object>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    static codec(paramfallback: CustomPacketPayload$FallbackProvider<Object>, paramtypes: (Object | null)[]): StreamCodec<Object, CustomPacketPayload>;
    static createType(paramid: string): CustomPacketPayload$Type<Object>;
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