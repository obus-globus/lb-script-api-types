import type { Record } from '../../../java/lang/Record.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class MinecraftServer$ServerResourcePackInfo extends Record {
    constructor(id: UUID, url: string, hash: string, isRequired: boolean, prompt: Component)
    // private hash: string;
    // private id: UUID;
    // private isRequired: boolean;
    // private prompt: Component;
    // private url: string;
    equals(o: Object | null): boolean;
    hash(): string;
    hashCode(): number;
    id(): UUID;
    isRequired(): boolean;
    prompt(): Component;
    toString(): string;
    url(): string;
}