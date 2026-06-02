import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { KnownPack } from '../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { PackSource } from '../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
export class PackLocationInfo extends Record {
    constructor(id: string, title: Component, source: PackSource, knownPackInfo: Optional<KnownPack>)
    // private id: string;
    // private knownPackInfo: Optional<KnownPack>;
    // private source: PackSource;
    // private title: Component;
    createChatLink(enabled: boolean, description: Component): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    knownPackInfo(): Optional<KnownPack>;
    source(): PackSource;
    title(): Component;
    toString(): string;
}