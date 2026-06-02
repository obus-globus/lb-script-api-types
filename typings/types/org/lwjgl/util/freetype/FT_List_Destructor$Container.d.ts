import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { FT_List_Destructor } from '../../../../org/lwjgl/util/freetype/FT_List_Destructor.d.ts'
import type { FT_List_DestructorI } from '../../../../org/lwjgl/util/freetype/FT_List_DestructorI.d.ts'
export class FT_List_Destructor$Container extends FT_List_Destructor {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_List_Destructor;
    static create(paramarg0: (param0: number, param1: number, param2: number) => void): FT_List_Destructor;
    static createSafe(paramarg0: number): FT_List_Destructor;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number) => void)
    // private delegate: (param0: number, param1: number, param2: number) => void;
    invoke(arg0: number, arg1: number, arg2: number): void;
}