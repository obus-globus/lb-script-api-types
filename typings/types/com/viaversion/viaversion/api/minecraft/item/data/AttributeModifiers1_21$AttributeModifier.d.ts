import type { AttributeModifiers1_21$Display } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AttributeModifiers1_21$Display.d.ts'
import type { AttributeModifiers1_21$ModifierData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AttributeModifiers1_21$ModifierData.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AttributeModifiers1_21$AttributeModifier extends Record {
    static ARRAY_TYPE1_21: Type<AttributeModifiers1_21$AttributeModifier[]>;
    static ARRAY_TYPE1_21_6: Type<AttributeModifiers1_21$AttributeModifier[]>;
    static TYPE1_21: Type<AttributeModifiers1_21$AttributeModifier>;
    static TYPE1_21_6: Type<AttributeModifiers1_21$AttributeModifier>;
    constructor(arg0: number, arg1: AttributeModifiers1_21$ModifierData, arg2: number)
    constructor(attribute: number, modifier: AttributeModifiers1_21$ModifierData, slotType: number, display: AttributeModifiers1_21$Display)
    // private attribute: number;
    // private display: AttributeModifiers1_21$Display;
    // private modifier: AttributeModifiers1_21$ModifierData;
    // private slotType: number;
    attribute(): number;
    display(): AttributeModifiers1_21$Display;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modifier(): AttributeModifiers1_21$ModifierData;
    slotType(): number;
    toString(): string;
}