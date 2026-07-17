import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessCondition } from '../../../../org/graalvm/nativeimage/dynamicaccess/AccessCondition.d.ts'
export interface RuntimeProxyRegistrySupport extends Object{
    registerProxy(condition: AccessCondition, preserved: boolean, ...interfaces: Class<Object>[]): Class<Object>;
}