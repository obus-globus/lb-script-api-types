import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLinks$KnownLinkType } from '../../../net/minecraft/server/ServerLinks$KnownLinkType.d.ts'
export class ServerLinks$UntrustedEntry extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerLinks$UntrustedEntry>;
    constructor(type: Either<ServerLinks$KnownLinkType, Component>, link: string)
    // private link: string;
    // private type: Either<ServerLinks$KnownLinkType, Component>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    link(): string;
    toString(): string;
    type(): Either<ServerLinks$KnownLinkType, Component>;
}