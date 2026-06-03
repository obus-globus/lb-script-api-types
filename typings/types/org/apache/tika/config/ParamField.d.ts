import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AccessibleObject } from '../../../../java/lang/reflect/AccessibleObject.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Field as Field_2 } from '../../../../org/apache/tika/config/Field.d.ts'
export class ParamField extends Object {
    static DEFAULT: string;
    constructor(arg0: AccessibleObject)
    readonly field: Field;
    readonly name: string;
    readonly required: boolean;
    readonly setter: Method;
    readonly type: Class<Object>;
    assignValue(arg0: Object, arg1: Object): void;
    getField(): Field;
    getName(): string;
    getSetter(): Method;
    getType(): Class<Object>;
    isRequired(): boolean;
    // private retrieveParamName(arg0: Field_2): string;
    // private retrieveType(): Class<Object>;
    toString(): string;
}