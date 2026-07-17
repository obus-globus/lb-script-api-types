import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessCondition } from '../../../../org/graalvm/nativeimage/dynamicaccess/AccessCondition.d.ts'
export interface JNIAccess extends Object{
    register(condition: AccessCondition, ...classes: Class<Object>[]): void;
    register(condition: AccessCondition, ...methods: Executable[]): void;
    register(condition: AccessCondition, ...fields: Field[]): void;
}