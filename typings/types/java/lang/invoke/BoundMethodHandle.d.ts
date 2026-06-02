import type { BoundMethodHandle$SpeciesData } from '../../../java/lang/invoke/BoundMethodHandle$SpeciesData.d.ts'
import type { LambdaForm } from '../../../java/lang/invoke/LambdaForm.d.ts'
import type { LambdaFormEditor } from '../../../java/lang/invoke/LambdaFormEditor.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class BoundMethodHandle extends MethodHandle {
    constructor(arg0: MethodType, arg1: LambdaForm)
    arg(arg0: number): Object;
    bindArgumentD(arg0: number, arg1: number): BoundMethodHandle;
    bindArgumentF(arg0: number, arg1: number): BoundMethodHandle;
    bindArgumentI(arg0: number, arg1: number): BoundMethodHandle;
    bindArgumentJ(arg0: number, arg1: number): BoundMethodHandle;
    bindArgumentL(arg0: number, arg1: Object): BoundMethodHandle;
    copyWith(arg0: MethodType, arg1: LambdaForm): BoundMethodHandle;
    copyWithExtendD(arg0: MethodType, arg1: LambdaForm, arg2: number): BoundMethodHandle;
    copyWithExtendF(arg0: MethodType, arg1: LambdaForm, arg2: number): BoundMethodHandle;
    copyWithExtendI(arg0: MethodType, arg1: LambdaForm, arg2: number): BoundMethodHandle;
    copyWithExtendJ(arg0: MethodType, arg1: LambdaForm, arg2: number): BoundMethodHandle;
    copyWithExtendL(arg0: MethodType, arg1: LambdaForm, arg2: Object): BoundMethodHandle;
    editor(): LambdaFormEditor;
    fieldCount(): number;
    internalProperties(arg0: number): Object;
    internalValues(arg0: number): string;
    rebind(): BoundMethodHandle;
    speciesData(): BoundMethodHandle$SpeciesData;
    // private tooComplex(): boolean;
}