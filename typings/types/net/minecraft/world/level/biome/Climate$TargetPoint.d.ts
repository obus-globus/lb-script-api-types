import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Climate$TargetPoint extends Record {
    constructor(temperature: number, humidity: number, continentalness: number, erosion: number, depth: number, weirdness: number)
    // private continentalness: number;
    // private depth: number;
    // private erosion: number;
    // private humidity: number;
    // private temperature: number;
    // private weirdness: number;
    continentalness(): number;
    depth(): number;
    equals(o: Object | null): boolean;
    erosion(): number;
    hashCode(): number;
    humidity(): number;
    temperature(): number;
    toParameterArray(): number[];
    toString(): string;
    weirdness(): number;
}