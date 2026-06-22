import type { MsgBoxCallbackI } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/api/msgbox/MsgBoxCallbackI.d.ts'
import type { Callback } from '../../../../../../../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../../../../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../../../../../../org/lwjgl/system/CallbackI.d.ts'
export abstract class MsgBoxCallback extends Callback implements MsgBoxCallbackI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CIF: Callback$Descriptor;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: (param0: number) => void): MsgBoxCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    private constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    invoke(arg0: number): void;
}