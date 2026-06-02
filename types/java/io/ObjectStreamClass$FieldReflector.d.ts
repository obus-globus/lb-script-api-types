import type { ObjectStreamField } from '../../java/io/ObjectStreamField.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ObjectStreamClass$FieldReflector extends Object {
    constructor(arg0: ObjectStreamField[])
    // private fields: ObjectStreamField[];
    // private numPrimFields: number;
    // private offsets: number[];
    // private readKeys: number[];
    // private typeCodes: string[];
    // private types: Class<Object>[];
    // private writeKeys: number[];
    checkObjectFieldValueTypes(arg0: Object, arg1: Object[]): void;
    getFields(): ObjectStreamField[];
    getObjFieldValues(arg0: Object, arg1: Object[]): void;
    getPrimFieldValues(arg0: Object, arg1: number[]): void;
    setObjFieldValues(arg0: Object, arg1: Object[]): void;
    // private setObjFieldValues(arg0: Object, arg1: Object[], arg2: boolean): void;
    setPrimFieldValues(arg0: Object, arg1: number[]): void;
}