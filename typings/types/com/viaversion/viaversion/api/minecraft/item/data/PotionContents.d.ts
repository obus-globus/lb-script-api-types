import type { PotionEffect } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotionEffect.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PotionContents extends Record implements Copyable {
    static TYPE1_20_5: Type<PotionContents>;
    static TYPE1_21_2: Type<PotionContents>;
    static copy(paramarg0: Object | null): Object | null;
    constructor(arg0: number, arg1: number, arg2: PotionEffect[])
    constructor(potion: number, customColor: number, customEffects: PotionEffect[], customName: string)
    // private customColor: number;
    // private customEffects: PotionEffect[];
    // private customName: string;
    // private potion: number;
    copy(): PotionContents;
    customColor(): number;
    customEffects(): PotionEffect[];
    customName(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    potion(): number;
    toString(): string;
}