import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLinks$Entry } from '../../../net/minecraft/server/ServerLinks$Entry.d.ts'
import type { ServerLinks$KnownLinkType } from '../../../net/minecraft/server/ServerLinks$KnownLinkType.d.ts'
import type { ServerLinks$UntrustedEntry } from '../../../net/minecraft/server/ServerLinks$UntrustedEntry.d.ts'
export class ServerLinks extends Record {
    static EMPTY: ServerLinks;
    static TYPE_STREAM_CODEC: StreamCodec<ByteBuf, Either<ServerLinks$KnownLinkType, Component>>;
    static UNTRUSTED_LINKS_STREAM_CODEC: StreamCodec<ByteBuf, ServerLinks$UntrustedEntry[]>;
    constructor(entries: ServerLinks$Entry[])
    // private entries: ServerLinks$Entry[];
    entries(): ServerLinks$Entry[];
    equals(o: Object | null): boolean;
    findKnownType(type: ServerLinks$KnownLinkType): Optional<ServerLinks$Entry>;
    hashCode(): number;
    isEmpty(): boolean;
    toString(): string;
    untrust(): ServerLinks$UntrustedEntry[];
}