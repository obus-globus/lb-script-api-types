import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class KeyMapping$Category extends Record {
    static CREATIVE: KeyMapping$Category;
    static DEBUG: KeyMapping$Category;
    static GAMEPLAY: KeyMapping$Category;
    static INVENTORY: KeyMapping$Category;
    static MISC: KeyMapping$Category;
    static MOVEMENT: KeyMapping$Category;
    static MULTIPLAYER: KeyMapping$Category;
    static SPECTATOR: KeyMapping$Category;
    static register(paramid: Identifier): KeyMapping$Category;
    constructor(id: Identifier)
    // private id: Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    label(): Component;
    toString(): string;
}