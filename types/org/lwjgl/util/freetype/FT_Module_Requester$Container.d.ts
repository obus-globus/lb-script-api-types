import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { FT_Module_Requester } from '../../../../org/lwjgl/util/freetype/FT_Module_Requester.d.ts'
import type { FT_Module_RequesterI } from '../../../../org/lwjgl/util/freetype/FT_Module_RequesterI.d.ts'
export class FT_Module_Requester$Container extends FT_Module_Requester {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Module_Requester;
    static create(paramarg0: (param0: number, param1: number) => kotlin.Long): FT_Module_Requester;
    static createSafe(paramarg0: number): FT_Module_Requester;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number) => kotlin.Long)
    // private delegate: (param0: number, param1: number) => kotlin.Long;
    invoke(arg0: number, arg1: number): number;
}