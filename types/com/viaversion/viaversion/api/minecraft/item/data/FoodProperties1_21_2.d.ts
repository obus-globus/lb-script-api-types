import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FoodProperties1_21_2 extends Record {
    static TYPE: Type<FoodProperties1_21_2>;
    // private canAlwaysEat: boolean;
    // private nutrition: number;
    // private saturationModifier: number;
    canAlwaysEat(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    nutrition(): number;
    saturationModifier(): number;
    toString(): string;
}