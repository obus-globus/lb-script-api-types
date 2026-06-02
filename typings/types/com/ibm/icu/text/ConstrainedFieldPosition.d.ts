import type { ConstrainedFieldPosition$ConstraintType } from '../../../../com/ibm/icu/text/ConstrainedFieldPosition$ConstraintType.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Format$Field } from '../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConstrainedFieldPosition extends Object {
    constructor()
    // private fClassConstraint: Class<Object>;
    // private fConstraint: ConstrainedFieldPosition$ConstraintType;
    // private fContext: number;
    // private fField: Format$Field;
    // private fLimit: number;
    // private fStart: number;
    // private fValue: Object;
    constrainClass(arg0: Class<Object>): void;
    constrainField(arg0: Format$Field): void;
    constrainFieldAndValue(arg0: Format$Field, arg1: Object): void;
    getField(): Format$Field;
    getFieldValue(): Object;
    getInt64IterationContext(): number;
    getLimit(): number;
    getStart(): number;
    matchesField(arg0: Format$Field, arg1: Object): boolean;
    reset(): void;
    setInt64IterationContext(arg0: number): void;
    setState(arg0: Format$Field, arg1: Object, arg2: number, arg3: number): void;
    toString(): string;
}