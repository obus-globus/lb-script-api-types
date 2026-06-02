import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConfigurationCondition } from '../../../../org/graalvm/nativeimage/impl/ConfigurationCondition.d.ts'
export interface ReflectionRegistry extends Object{
    register(condition: ConfigurationCondition, classes: Class<Object>[]): void;
    register(condition: ConfigurationCondition, unsafeAllocated: boolean, clazz: Class<Object>): void;
    register(condition: ConfigurationCondition, queriedOnly: boolean, methods: Executable[]): void;
    register(condition: ConfigurationCondition, finalIsWritable: boolean, fields: Field[]): void;
    registerClassLookup(condition: ConfigurationCondition, typeName: string): void;
    registerConstructorLookup(condition: ConfigurationCondition, declaringClass: Class<Object>, parameterTypes: Class<Object>[]): void;
    registerFieldLookup(condition: ConfigurationCondition, declaringClass: Class<Object>, fieldName: string): void;
    registerMethodLookup(condition: ConfigurationCondition, declaringClass: Class<Object>, methodName: string, parameterTypes: Class<Object>[]): void;
}