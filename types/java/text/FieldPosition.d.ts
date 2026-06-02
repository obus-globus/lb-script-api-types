import type { Format$Field } from '../../java/text/Format$Field.d.ts'
import type { Format$FieldDelegate } from '../../java/text/Format$FieldDelegate.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FieldPosition extends Object {
    constructor(arg0: Format$Field)
    constructor(arg0: Format$Field, arg1: number)
    constructor(arg0: number)
    // private attribute: Format$Field;
    beginIndex: number;
    endIndex: number;
    field: number;
    equals(arg0: Object | null): boolean;
    getBeginIndex(): number;
    getEndIndex(): number;
    getField(): number;
    getFieldAttribute(): Format$Field;
    getFieldDelegate(): Format$FieldDelegate;
    hashCode(): number;
    // private matchesField(arg0: Format$Field): boolean;
    // private matchesField(arg0: Format$Field, arg1: number): boolean;
    setBeginIndex(arg0: number): void;
    setEndIndex(arg0: number): void;
    toString(): string;
}