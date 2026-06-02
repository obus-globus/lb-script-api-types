import type { Class } from '../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { VarHandle } from '../../../../java/lang/invoke/VarHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class VarHandleFactory extends Object {
    static intBeArrayView(): VarHandle;
    static intBeByteBufferView(): VarHandle;
    static intLeArrayView(): VarHandle;
    static intLeByteBufferView(): VarHandle;
    static isSupported(): boolean;
    static longBeArrayView(): VarHandle;
    static longBeByteBufferView(): VarHandle;
    static longLeArrayView(): VarHandle;
    static longLeByteBufferView(): VarHandle;
    static privateFindVarHandle(paramarg0: MethodHandles$Lookup, paramarg1: Class<Object>, paramarg2: string, paramarg3: Class<Object>): VarHandle;
    static shortBeArrayView(): VarHandle;
    static shortBeByteBufferView(): VarHandle;
    static shortLeArrayView(): VarHandle;
    static shortLeByteBufferView(): VarHandle;
    static unavailableCause(): Throwable;
    private constructor()
}