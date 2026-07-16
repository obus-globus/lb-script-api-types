import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { VmaCheckDefragmentationBreakFunction } from '../../../../org/lwjgl/util/vma/VmaCheckDefragmentationBreakFunction.d.ts'
import type { VmaCheckDefragmentationBreakFunctionI } from '../../../../org/lwjgl/util/vma/VmaCheckDefragmentationBreakFunctionI.d.ts'
export class VmaCheckDefragmentationBreakFunction$Container extends VmaCheckDefragmentationBreakFunction {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): VmaCheckDefragmentationBreakFunction;
    static create(paramarg0: (param0: number) => number): VmaCheckDefragmentationBreakFunction;
    static createSafe(paramarg0: number): VmaCheckDefragmentationBreakFunction;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number) => number)
    // private delegate: (param0: number) => number;
    invoke(arg0: number): number;
}