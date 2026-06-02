import type { OpticFinder } from '../../../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ThrownPotionSplitFix$ItemIdFinder extends Record {
    private constructor(itemFinder: OpticFinder<Object>, itemIdFinder: OpticFinder<Pair<string, string>>)
    // private itemFinder: OpticFinder<Object>;
    // private itemIdFinder: OpticFinder<Pair<string, string>>;
    equals(o: Object | null): boolean;
    getItemId(entity: Typed<Object>): string;
    hashCode(): number;
    itemFinder(): OpticFinder<Object>;
    itemIdFinder(): OpticFinder<Pair<string, string>>;
    toString(): string;
}