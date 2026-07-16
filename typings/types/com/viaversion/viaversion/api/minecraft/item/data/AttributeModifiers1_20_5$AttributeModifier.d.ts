import type { AttributeModifiers1_20_5$ModifierData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AttributeModifiers1_20_5$ModifierData.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AttributeModifiers1_20_5$AttributeModifier extends Record {
    static ARRAY_TYPE: Type<AttributeModifiers1_20_5$AttributeModifier[]>;
    static TYPE: Type<AttributeModifiers1_20_5$AttributeModifier>;
    constructor(attribute: number, modifier: AttributeModifiers1_20_5$ModifierData, slotType: number)
    // private attribute: number;
    // private modifier: AttributeModifiers1_20_5$ModifierData;
    // private slotType: number;
    attribute(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modifier(): AttributeModifiers1_20_5$ModifierData;
    slotType(): number;
    toString(): string;
}