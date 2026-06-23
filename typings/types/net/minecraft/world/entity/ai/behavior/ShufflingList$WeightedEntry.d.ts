import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ShufflingList$WeightedEntry<T extends unknown> extends Object {
    static codec(paramelementCodec: Codec<Object>): Codec<ShufflingList$WeightedEntry<Object>>;
    private constructor(data: T, weight: number)
    readonly data: T;
    // private randWeight: number;
    readonly weight: number;
    getData(): T;
    // private getRandWeight(): number;
    getWeight(): number;
    // private setRandom(random: number): void;
    toString(): string;
}