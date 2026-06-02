import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { FT_List_Iterator } from '../../../../org/lwjgl/util/freetype/FT_List_Iterator.d.ts'
import type { FT_List_IteratorI } from '../../../../org/lwjgl/util/freetype/FT_List_IteratorI.d.ts'
export class FT_List_Iterator$Container extends FT_List_Iterator {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_List_Iterator;
    static create(paramarg0: (param0: number, param1: number) => kotlin.Int): FT_List_Iterator;
    static createSafe(paramarg0: number): FT_List_Iterator;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number) => kotlin.Int)
    // private delegate: (param0: number, param1: number) => kotlin.Int;
    invoke(arg0: number, arg1: number): number;
}