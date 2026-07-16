import type { MsgBoxCallback } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/api/msgbox/MsgBoxCallback.d.ts'
import type { MsgBoxCallbackI } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/api/msgbox/MsgBoxCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../../../../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../../../../../../org/lwjgl/system/CallbackI.d.ts'
export class MsgBoxCallback$Container extends MsgBoxCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CIF: Callback$Descriptor;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: (param0: number) => void): MsgBoxCallback;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number) => void)
    // private delegate: (param0: number) => void;
    invoke(arg0: number): void;
}