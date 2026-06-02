import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { InputControl } from '../../../../../net/minecraft/server/dialog/input/InputControl.d.ts'
import type { TextInput$MultilineOptions } from '../../../../../net/minecraft/server/dialog/input/TextInput$MultilineOptions.d.ts'
export class TextInput extends Record implements InputControl {
    static MAP_CODEC: MapCodec<InputControl>;
    static MAP_CODEC: MapCodec<TextInput>;
    // private initial: string;
    // private label: Component;
    // private labelVisible: boolean;
    // private maxLength: number;
    // private multiline: Optional<TextInput$MultilineOptions>;
    // private width: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    initial(): string;
    label(): Component;
    labelVisible(): boolean;
    mapCodec(): MapCodec<TextInput>;
    maxLength(): number;
    multiline(): Optional<TextInput$MultilineOptions>;
    toString(): string;
    width(): number;
}