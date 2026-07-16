import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ShufflingList$WeightedEntry<T extends unknown> extends Object {
    static codec<E extends unknown>(paramelementCodec: Codec<E>): Codec<ShufflingList$WeightedEntry<E>>;
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