import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { InputControl } from '../../../../../net/minecraft/server/dialog/input/InputControl.d.ts'
export class BooleanInput extends Record implements InputControl {
    static MAP_CODEC: MapCodec<BooleanInput>;
    static MAP_CODEC: MapCodec<InputControl>;
    constructor(label: Component, initial: boolean, onTrue: string, onFalse: string)
    // private initial: boolean;
    // private label: Component;
    // private onFalse: string;
    // private onTrue: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    initial(): boolean;
    label(): Component;
    mapCodec(): MapCodec<BooleanInput>;
    onFalse(): string;
    onTrue(): string;
    toString(): string;
}