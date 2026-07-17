import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessCondition } from '../../../../org/graalvm/nativeimage/dynamicaccess/AccessCondition.d.ts'
import type { ReflectionRegistry } from '../../../../org/graalvm/nativeimage/impl/ReflectionRegistry.d.ts'
export interface RuntimeJNIAccessSupport extends Object, ReflectionRegistry{
    register(condition: AccessCondition, ...classes: Class<Object>[]): void;
    register(condition: AccessCondition, preserved: boolean, ...methods: Executable[]): void;
    register(condition: AccessCondition, finalIsWritable: boolean, preserved: boolean, ...fields: Field[]): void;
    registerClassLookup(condition: AccessCondition, preserved: boolean, typeName: string): void;
    registerConstructorLookup(condition: AccessCondition, preserved: boolean, declaringClass: Class<Object>, ...parameterTypes: Class<Object>[]): void;
    registerMethodLookup(condition: AccessCondition, preserved: boolean, declaringClass: Class<Object>, methodName: string, ...parameterTypes: Class<Object>[]): void;
}