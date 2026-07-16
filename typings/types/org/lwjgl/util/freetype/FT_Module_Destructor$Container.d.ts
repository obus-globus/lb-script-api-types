import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { FT_Module_Destructor } from '../../../../org/lwjgl/util/freetype/FT_Module_Destructor.d.ts'
import type { FT_Module_DestructorI } from '../../../../org/lwjgl/util/freetype/FT_Module_DestructorI.d.ts'
export class FT_Module_Destructor$Container extends FT_Module_Destructor {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Module_Destructor;
    static create(paramarg0: (param0: number) => void): FT_Module_Destructor;
    static createSafe(paramarg0: number): FT_Module_Destructor;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number) => void)
    // private delegate: (param0: number) => void;
    invoke(arg0: number): void;
}