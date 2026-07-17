import type { MethodHandle } from '../../../../java/lang/invoke/MethodHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessCondition } from '../../../../org/graalvm/nativeimage/dynamicaccess/AccessCondition.d.ts'
export interface RuntimeForeignAccessSupport extends Object{
    registerForDirectUpcall(condition: AccessCondition, target: MethodHandle, desc: Object, ...options: Object[]): void;
    registerForDowncall(condition: AccessCondition, desc: Object, ...options: Object[]): void;
    registerForUpcall(condition: AccessCondition, desc: Object, ...options: Object[]): void;
}