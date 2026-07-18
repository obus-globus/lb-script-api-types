import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConfigurationCondition } from '../../../../org/graalvm/nativeimage/impl/ConfigurationCondition.d.ts'
export interface RuntimeProxyCreationSupport extends Object{
    addProxyClass(condition: ConfigurationCondition, ...interfaces: Class<Object>[]): void;
}