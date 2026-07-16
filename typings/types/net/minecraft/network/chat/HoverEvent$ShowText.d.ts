import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { HoverEvent } from '../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { HoverEvent$Action } from '../../../../net/minecraft/network/chat/HoverEvent$Action.d.ts'
export class HoverEvent$ShowText extends Record implements HoverEvent {
    static CODEC: MapCodec<HoverEvent$ShowText>;
    constructor(value: Component)
    // private value: Component;
    action(): HoverEvent$Action;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): Component;
}