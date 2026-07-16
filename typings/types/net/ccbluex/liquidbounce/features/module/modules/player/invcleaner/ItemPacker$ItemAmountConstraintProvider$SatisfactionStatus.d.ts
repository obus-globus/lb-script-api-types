import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus extends Enum<ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus> {
    static NOT_SATISFIED: ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    static OVERSATURATED: ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    static SATISFIED: ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    static getEntries(): ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    static values(): ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus[];
    private constructor()
    name(): "NOT_SATISFIED" | "SATISFIED" | "OVERSATURATED";
}