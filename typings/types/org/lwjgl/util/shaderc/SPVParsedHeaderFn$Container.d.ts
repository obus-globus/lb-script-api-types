import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { SPVParsedHeaderFn } from '../../../../org/lwjgl/util/shaderc/SPVParsedHeaderFn.d.ts'
import type { SPVParsedHeaderFnI } from '../../../../org/lwjgl/util/shaderc/SPVParsedHeaderFnI.d.ts'
export class SPVParsedHeaderFn$Container extends SPVParsedHeaderFn {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): SPVParsedHeaderFn;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => number): SPVParsedHeaderFn;
    static createSafe(paramarg0: number): SPVParsedHeaderFn;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => number)
    // private delegate: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => number;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
}