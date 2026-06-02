import type { PotionEffectData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotionEffectData.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PotionEffect extends Record {
    static ARRAY_TYPE: Type<(Object | null)[]>;
    static TYPE: Type<PotionEffect>;
    // private effect: number;
    // private effectData: PotionEffectData;
    effect(): number;
    effectData(): PotionEffectData;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}