import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Climate$Parameter extends Record {
    static CODEC: Codec<Climate$Parameter>;
    static point(parammin: number): Climate$Parameter;
    static span(parammin: number, parammax: number): Climate$Parameter;
    static span(parammin: Climate$Parameter, parammax: Climate$Parameter): Climate$Parameter;
    constructor(min: number, max: number)
    // private max: number;
    // private min: number;
    distance(target: number): number;
    distance(target: Climate$Parameter): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    max(): number;
    min(): number;
    span(other: Climate$Parameter): Climate$Parameter;
    toString(): string;
}