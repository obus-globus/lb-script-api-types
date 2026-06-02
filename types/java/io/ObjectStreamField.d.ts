import type { Class } from '../../java/lang/Class.d.ts'
import type { Field } from '../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class ObjectStreamField extends Object implements Comparable<Object> {
    constructor(arg0: Field, arg1: boolean, arg2: boolean)
    constructor(arg0: string, arg1: Class<Object>)
    constructor(arg0: string, arg1: Class<Object>, arg2: boolean)
    constructor(arg0: string, arg1: string, arg2: boolean)
    // private field: Field;
    readonly name: string;
    readonly offset: number;
    // private signature: string;
    readonly type: Class<Object>;
    // private typeSignature: string;
    readonly unshared: boolean;
    compareTo(arg0: Object): number;
    getField(): Field;
    getName(): string;
    getOffset(): number;
    getSignature(): string;
    getType(): Class<Object>;
    getTypeCode(): string;
    getTypeString(): string;
    isPrimitive(): boolean;
    isUnshared(): boolean;
    setOffset(arg0: number): void;
    toString(): string;
}