import type { MethodHandle } from '../../../../java/lang/invoke/MethodHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConfigurationCondition } from '../../../../org/graalvm/nativeimage/impl/ConfigurationCondition.d.ts'
export interface RuntimeForeignAccessSupport extends Object{
    registerForDirectUpcall(condition: ConfigurationCondition, target: MethodHandle, desc: Object, ...options: Object[]): void;
    registerForDowncall(condition: ConfigurationCondition, desc: Object, ...options: Object[]): void;
    registerForUpcall(condition: ConfigurationCondition, desc: Object, ...options: Object[]): void;
}