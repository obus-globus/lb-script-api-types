import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { NumberFormat } from '../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
export class Score$Packed extends Record {
    static MAP_CODEC: MapCodec<Score$Packed>;
    constructor(value: number, locked: boolean, display: Optional<Component>, numberFormat: Optional<NumberFormat>)
    // private display: Optional<Component>;
    // private locked: boolean;
    // private numberFormat: Optional<NumberFormat>;
    // private value: number;
    display(): Optional<Component>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    locked(): boolean;
    numberFormat(): Optional<NumberFormat>;
    toString(): string;
    value(): number;
}