import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { BannerPattern } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BannerPattern.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BannerPatternLayer extends Record {
    static ARRAY_TYPE: Type<(Object | null)[]>;
    static TYPE: Type<BannerPatternLayer>;
    // private dyeColor: number;
    // private pattern: Holder<BannerPattern>;
    dyeColor(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    pattern(): Holder<BannerPattern>;
    toString(): string;
}