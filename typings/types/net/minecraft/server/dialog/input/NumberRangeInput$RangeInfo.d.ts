import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NumberRangeInput$RangeInfo extends Record {
    static MAP_CODEC: MapCodec<NumberRangeInput$RangeInfo>;
    constructor(start: number, end: number, initial: Optional<number>, step: Optional<number>)
    // private end: number;
    // private initial: Optional<number>;
    // private start: number;
    // private step: Optional<number>;
    computeScaledValue(sliderValue: number): number;
    end(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    initial(): Optional<number>;
    // private initialScaledValue(): number;
    initialSliderValue(): number;
    // private isOutOfRange(scaledValue: number): boolean;
    // private scaledValueToSlider(value: number): number;
    start(): number;
    step(): Optional<number>;
    toString(): string;
}