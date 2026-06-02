import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlendingData$Packed extends Record {
    static CODEC: Codec<BlendingData$Packed>;
    // private heights: Optional<number[]>;
    // private maxSection: number;
    // private minSection: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    heights(): Optional<number[]>;
    maxSection(): number;
    minSection(): number;
    toString(): string;
}