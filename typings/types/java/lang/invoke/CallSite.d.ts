import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CallSite extends Object {
    constructor(arg0: MethodHandle)
    constructor(arg0: MethodType)
    constructor(arg0: MethodType, arg1: MethodHandle)
    readonly target: MethodHandle;
    // private checkTargetChange(arg0: MethodHandle): void;
    dynamicInvoker(): MethodHandle;
    getTarget(): MethodHandle;
    getTargetVolatile(): MethodHandle;
    makeDynamicInvoker(): MethodHandle;
    // private makeUninitializedCallSite(arg0: MethodType): MethodHandle;
    setTarget(arg0: MethodHandle): void;
    setTargetNormal(arg0: MethodHandle): void;
    setTargetVolatile(arg0: MethodHandle): void;
    type(): MethodType;
}