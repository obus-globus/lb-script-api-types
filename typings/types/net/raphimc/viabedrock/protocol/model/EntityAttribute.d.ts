import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttributeOperands } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/AttributeOperands.d.ts'
import type { EntityAttribute$Modifier } from '../../../../../net/raphimc/viabedrock/protocol/model/EntityAttribute$Modifier.d.ts'
export class EntityAttribute extends Record {
    // private currentValue: number;
    // private defaultMaxValue: number;
    // private defaultMinValue: number;
    // private defaultValue: number;
    // private maxValue: number;
    // private minValue: number;
    // private modifiers: EntityAttribute$Modifier[];
    // private name: string;
    // private applyModifiers(arg0: number, arg1: AttributeOperands): number;
    computeClampedValue(): number;
    computeCurrentValue(): number;
    computeMaxValue(): number;
    computeMinValue(): number;
    currentValue(): number;
    defaultMaxValue(): number;
    defaultMinValue(): number;
    defaultValue(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    maxValue(): number;
    minValue(): number;
    modifiers(): EntityAttribute$Modifier[];
    name(): string;
    toString(): string;
    withModifiers(arg0: EntityAttribute$Modifier[]): EntityAttribute;
    withValue(arg0: number): EntityAttribute;
}