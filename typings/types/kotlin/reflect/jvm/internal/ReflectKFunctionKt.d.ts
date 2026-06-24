import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DescriptorPatchingResult } from '../../../../kotlin/reflect/jvm/internal/DescriptorPatchingResult.d.ts'
import type { ReflectKFunction } from '../../../../kotlin/reflect/jvm/internal/ReflectKFunction.d.ts'
export class ReflectKFunctionKt extends Object {
    static extractContinuationArgument(paramarg0: ReflectKFunction): Type;
    static patchJvmDescriptorByExtraBoxing(paramarg0: ReflectKFunction, paramarg1: string): DescriptorPatchingResult;
}