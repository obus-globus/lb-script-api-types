import type { MethodHandle } from '../../../../java/lang/invoke/MethodHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Invoker extends Object {
    static dynamicInvoke<T extends unknown>(paramarg0: MethodHandle, paramarg1: Object[]): T;
    constructor()
}