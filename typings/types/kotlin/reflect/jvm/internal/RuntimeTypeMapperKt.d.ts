import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeTypeMapperKt extends Object {
    static getJvmSignature(paramarg0: Constructor<Object>): string;
    static getJvmSignature(paramarg0: Field): string;
    static getJvmSignature(paramarg0: Method): string;
}