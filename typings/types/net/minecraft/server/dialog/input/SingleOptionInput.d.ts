import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { InputControl } from '../../../../../net/minecraft/server/dialog/input/InputControl.d.ts'
import type { SingleOptionInput$Entry } from '../../../../../net/minecraft/server/dialog/input/SingleOptionInput$Entry.d.ts'
export class SingleOptionInput extends Record implements InputControl {
    static MAP_CODEC: MapCodec<SingleOptionInput>;
    constructor(width: number, entries: SingleOptionInput$Entry[], label: Component, labelVisible: boolean)
    // private entries: SingleOptionInput$Entry[];
    // private label: Component;
    // private labelVisible: boolean;
    // private width: number;
    entries(): SingleOptionInput$Entry[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    initial(): Optional<SingleOptionInput$Entry>;
    label(): Component;
    labelVisible(): boolean;
    mapCodec(): MapCodec<SingleOptionInput>;
    toString(): string;
    width(): number;
}