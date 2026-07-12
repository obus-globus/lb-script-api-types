import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConfigurationCondition } from '../../../../org/graalvm/nativeimage/impl/ConfigurationCondition.d.ts'
import type { ReflectionRegistry } from '../../../../org/graalvm/nativeimage/impl/ReflectionRegistry.d.ts'
export interface RuntimeJNIAccessSupport extends Object, ReflectionRegistry{
    register(condition: ConfigurationCondition, ...classes: Class<Object>[]): void;
    registerClassLookup(condition: ConfigurationCondition, typeName: string): void;
}