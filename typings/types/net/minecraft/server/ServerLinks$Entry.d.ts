import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerLinks$KnownLinkType } from '../../../net/minecraft/server/ServerLinks$KnownLinkType.d.ts'
export class ServerLinks$Entry extends Record {
    static custom(paramdisplayName: Component, paramlink: URI): ServerLinks$Entry;
    static knownType(paramtype: ServerLinks$KnownLinkType, paramlink: URI): ServerLinks$Entry;
    constructor(type: Either<ServerLinks$KnownLinkType, Component>, link: URI)
    // private link: URI;
    // private type: Either<ServerLinks$KnownLinkType, Component>;
    displayName(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    link(): URI;
    toString(): string;
    type(): Either<ServerLinks$KnownLinkType, Component>;
}