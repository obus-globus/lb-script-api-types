import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { VarHandle$AccessMode } from '../../../java/lang/invoke/VarHandle$AccessMode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Invokers extends Object {
    constructor(arg0: MethodType)
    // private invokers: MethodHandle[];
    // private targetType: MethodType;
    basicInvoker(): MethodHandle;
    // private cachedInvoker(arg0: number): MethodHandle;
    // private cachedVHInvoker(arg0: boolean, arg1: VarHandle$AccessMode): MethodHandle;
    // private checkInvoker(arg0: MethodHandle): boolean;
    // private checkVarHandleInvoker(arg0: MethodHandle): boolean;
    exactInvoker(): MethodHandle;
    genericInvoker(): MethodHandle;
    // private makeExactOrGeneralInvoker(arg0: boolean): MethodHandle;
    // private makeVarHandleMethodInvoker(arg0: VarHandle$AccessMode, arg1: boolean): MethodHandle;
    // private maybeCompileToBytecode(arg0: MethodHandle): void;
    // private setCachedInvoker(arg0: number, arg1: MethodHandle): MethodHandle;
    // private setCachedVHInvoker(arg0: boolean, arg1: VarHandle$AccessMode, arg2: MethodHandle): MethodHandle;
    spreadInvoker(arg0: number): MethodHandle;
    toString(): string;
    varHandleMethodExactInvoker(arg0: VarHandle$AccessMode): MethodHandle;
    varHandleMethodInvoker(arg0: VarHandle$AccessMode): MethodHandle;
}