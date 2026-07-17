import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessCondition } from '../../../../org/graalvm/nativeimage/dynamicaccess/AccessCondition.d.ts'
export interface ReflectionRegistry extends Object{
    register(condition: AccessCondition, ...classes: Class<Object>[]): void;
    register(condition: AccessCondition, preserved: boolean, clazz: Class<Object>): void;
    register(condition: AccessCondition, preserved: boolean, methods: Executable): void;
    register(condition: AccessCondition, preserved: boolean, ...methods: Executable[]): void;
    register(condition: AccessCondition, finalIsWritable: boolean, preserved: boolean, fields: Field): void;
    register(condition: AccessCondition, finalIsWritable: boolean, preserved: boolean, ...fields: Field[]): void;
    registerClassLookup(condition: AccessCondition, preserved: boolean, typeName: string): void;
    registerFieldLookup(condition: AccessCondition, preserved: boolean, declaringClass: Class<Object>, fieldName: string): void;
}