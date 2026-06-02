import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Enchantment$Cost extends Record {
    static CODEC: Codec<Enchantment$Cost>;
    // private base: number;
    // private perLevelAboveFirst: number;
    base(): number;
    calculate(level: number): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    perLevelAboveFirst(): number;
    toString(): string;
}