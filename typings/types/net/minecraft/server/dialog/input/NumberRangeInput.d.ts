import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { InputControl } from '../../../../../net/minecraft/server/dialog/input/InputControl.d.ts'
import type { NumberRangeInput$RangeInfo } from '../../../../../net/minecraft/server/dialog/input/NumberRangeInput$RangeInfo.d.ts'
export class NumberRangeInput extends Record implements InputControl {
    static MAP_CODEC: MapCodec<NumberRangeInput>;
    constructor(width: number, label: Component, labelFormat: string, rangeInfo: NumberRangeInput$RangeInfo)
    // private label: Component;
    // private labelFormat: string;
    // private rangeInfo: NumberRangeInput$RangeInfo;
    // private width: number;
    computeLabel(value: string): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    label(): Component;
    labelFormat(): string;
    mapCodec(): MapCodec<NumberRangeInput>;
    rangeInfo(): NumberRangeInput$RangeInfo;
    toString(): string;
    width(): number;
}