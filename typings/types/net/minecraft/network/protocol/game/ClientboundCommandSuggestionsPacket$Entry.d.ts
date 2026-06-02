import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ClientboundCommandSuggestionsPacket$Entry extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundCommandSuggestionsPacket$Entry>;
    constructor(text: string, tooltip: Optional<Component>)
    // private text: string;
    // private tooltip: Optional<Component>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    text(): string;
    toString(): string;
    tooltip(): Optional<Component>;
}