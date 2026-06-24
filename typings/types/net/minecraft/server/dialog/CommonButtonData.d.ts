import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class CommonButtonData extends Record {
    static DEFAULT_WIDTH: number;
    static MAP_CODEC: MapCodec<CommonButtonData>;
    constructor(label: Component, tooltip: Optional<Component>, width: number)
    constructor(label: Component, width: number)
    // private label: Component;
    // private tooltip: Optional<Component>;
    // private width: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    label(): Component;
    toString(): string;
    tooltip(): Optional<Component>;
    width(): number;
}