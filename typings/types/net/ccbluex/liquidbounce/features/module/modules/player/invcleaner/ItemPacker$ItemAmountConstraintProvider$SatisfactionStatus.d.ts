import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus extends Enum<ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus> {
    static NOT_SATISFIED: ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    static OVERSATURATED: ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    static SATISFIED: ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    static getEntries(): ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    static values(): ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus[];
    private constructor()
    name(): "NOT_SATISFIED" | "SATISFIED" | "OVERSATURATED";
}