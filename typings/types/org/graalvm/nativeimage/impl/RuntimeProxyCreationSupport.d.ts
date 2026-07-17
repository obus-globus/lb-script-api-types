import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessCondition } from '../../../../org/graalvm/nativeimage/dynamicaccess/AccessCondition.d.ts'
export interface RuntimeProxyCreationSupport extends Object{
    addProxyClass(condition: AccessCondition, preserved: boolean, ...interfaces: Class<Object>[]): void;
}