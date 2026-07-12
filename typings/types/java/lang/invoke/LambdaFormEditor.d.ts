import type { Class } from '../../../java/lang/Class.d.ts'
import type { BoundMethodHandle } from '../../../java/lang/invoke/BoundMethodHandle.d.ts'
import type { BoundMethodHandle$SpeciesData } from '../../../java/lang/invoke/BoundMethodHandle$SpeciesData.d.ts'
import type { LambdaForm } from '../../../java/lang/invoke/LambdaForm.d.ts'
import type { LambdaForm$BasicType } from '../../../java/lang/invoke/LambdaForm$BasicType.d.ts'
import type { LambdaFormBuffer } from '../../../java/lang/invoke/LambdaFormBuffer.d.ts'
import type { LambdaFormEditor$TransformKey } from '../../../java/lang/invoke/LambdaFormEditor$TransformKey.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LambdaFormEditor extends Object {
    private constructor(arg0: LambdaForm)
    // private lambdaForm: LambdaForm;
    addArgumentForm(arg0: number, arg1: LambdaForm$BasicType): LambdaForm;
    bindArgumentD(arg0: BoundMethodHandle, arg1: number, arg2: number): BoundMethodHandle;
    bindArgumentF(arg0: BoundMethodHandle, arg1: number, arg2: number): BoundMethodHandle;
    bindArgumentForm(arg0: number): LambdaForm;
    bindArgumentI(arg0: BoundMethodHandle, arg1: number, arg2: number): BoundMethodHandle;
    bindArgumentJ(arg0: BoundMethodHandle, arg1: number, arg2: number): BoundMethodHandle;
    bindArgumentL(arg0: BoundMethodHandle, arg1: number, arg2: Object): BoundMethodHandle;
    // private bindArgumentType(arg0: BoundMethodHandle, arg1: number, arg2: LambdaForm$BasicType): MethodType;
    // private buffer(): LambdaFormBuffer;
    collectArgumentsForm(arg0: number, arg1: MethodType): LambdaForm;
    collectReturnValueForm(arg0: MethodType): LambdaForm;
    dupArgumentForm(arg0: number, arg1: number): LambdaForm;
    filterArgumentForm(arg0: number, arg1: LambdaForm$BasicType): LambdaForm;
    filterArgumentsForm(arg0: number, arg1: MethodType, ...arg2: number[]): LambdaForm;
    filterRepeatedArgumentForm(arg0: LambdaForm$BasicType, ...arg1: number[]): LambdaForm;
    filterReturnForm(arg0: LambdaForm$BasicType, arg1: boolean): LambdaForm;
    foldArgumentsForm(arg0: number, arg1: boolean, arg2: MethodType): LambdaForm;
    foldArgumentsForm(arg0: number, arg1: boolean, arg2: MethodType, ...arg3: number[]): LambdaForm;
    // private formParametersMatch(arg0: LambdaForm, arg1: LambdaForm$BasicType, ...arg2: number[]): boolean;
    // private getInCache(arg0: LambdaFormEditor$TransformKey): LambdaForm;
    // private makeArgumentCombinationForm(arg0: number, arg1: MethodType, arg2: boolean, arg3: boolean): LambdaForm;
    // private makeArgumentCombinationForm(arg0: number, arg1: MethodType, arg2: number[], arg3: boolean, arg4: boolean): LambdaForm;
    // private makeRepeatedFilterForm(arg0: MethodType, ...arg1: number[]): LambdaForm;
    // private newSpeciesData(arg0: LambdaForm$BasicType): BoundMethodHandle$SpeciesData;
    noteLoopLocalTypesForm(arg0: number, arg1: LambdaForm$BasicType[]): LambdaForm;
    // private oldSpeciesData(): BoundMethodHandle$SpeciesData;
    permuteArgumentsForm(arg0: number, arg1: number[]): LambdaForm;
    // private putInCache(arg0: LambdaFormEditor$TransformKey, arg1: LambdaForm): LambdaForm;
    spreadArgumentsForm(arg0: number, arg1: Class<Object>, arg2: number): LambdaForm;
}