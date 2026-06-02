import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CosmeticCategory } from '../../../../../../net/ccbluex/liquidbounce/api/models/cosmetics/CosmeticCategory.d.ts'
export class Cosmetic extends Object {
    constructor(category: CosmeticCategory, extra: string | null)
    readonly category: CosmeticCategory;
    readonly extra: string | null;
    component1(): CosmeticCategory;
    component2(): string | null;
    copy(category: CosmeticCategory, extra: string | null): Cosmetic;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}