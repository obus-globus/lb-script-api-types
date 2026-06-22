import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ConfigurationCondition } from '../../../../org/graalvm/nativeimage/impl/ConfigurationCondition.d.ts'
import type { ReflectionRegistry } from '../../../../org/graalvm/nativeimage/impl/ReflectionRegistry.d.ts'
export interface RuntimeReflectionSupport extends Object, ReflectionRegistry{
    register(condition: ConfigurationCondition, classes: Class<Object>[]): void;
    registerAllClassesQuery(condition: ConfigurationCondition, clazz: Class<Object>): void;
    registerAllConstructorsQuery(condition: ConfigurationCondition, queriedOnly: boolean, clazz: Class<Object>): void;
    registerAllDeclaredClassesQuery(condition: ConfigurationCondition, clazz: Class<Object>): void;
    registerAllDeclaredConstructorsQuery(condition: ConfigurationCondition, queriedOnly: boolean, clazz: Class<Object>): void;
    registerAllDeclaredFields(condition: ConfigurationCondition, clazz: Class<Object>): void;
    registerAllDeclaredMethodsQuery(condition: ConfigurationCondition, queriedOnly: boolean, clazz: Class<Object>): void;
    registerAllFields(condition: ConfigurationCondition, clazz: Class<Object>): void;
    registerAllMethodsQuery(condition: ConfigurationCondition, queriedOnly: boolean, clazz: Class<Object>): void;
    registerAllNestMembersQuery(condition: ConfigurationCondition, clazz: Class<Object>): void;
    registerAllPermittedSubclassesQuery(condition: ConfigurationCondition, clazz: Class<Object>): void;
    registerAllRecordComponentsQuery(condition: ConfigurationCondition, clazz: Class<Object>): void;
    registerAllSignersQuery(condition: ConfigurationCondition, clazz: Class<Object>): void;
    registerClassLookup(condition: ConfigurationCondition, typeName: string): void;
    registerClassLookupException(condition: ConfigurationCondition, typeName: string, t: Throwable): void;
}