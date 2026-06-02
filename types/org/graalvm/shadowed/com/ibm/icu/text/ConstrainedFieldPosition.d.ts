import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConstrainedFieldPosition$ConstraintType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ConstrainedFieldPosition$ConstraintType.d.ts'
export class ConstrainedFieldPosition extends Object {
    constructor()
    // private fClassConstraint: Class<Object>;
    // private fConstraint: ConstrainedFieldPosition$ConstraintType;
    // private fContext: number;
    // private fField: Format$Field;
    // private fLimit: number;
    // private fStart: number;
    // private fValue: Object;
    constrainClass(classConstraint: Class<Object>): void;
    constrainField(field: Format$Field): void;
    constrainFieldAndValue(field: Format$Field, fieldValue: Object): void;
    getField(): Format$Field;
    getFieldValue(): Object;
    getInt64IterationContext(): number;
    getLimit(): number;
    getStart(): number;
    matchesField(field: Format$Field, fieldValue: Object): boolean;
    reset(): void;
    setInt64IterationContext(context: number): void;
    setState(field: Format$Field, value: Object, start: number, limit: number): void;
    toString(): string;
}