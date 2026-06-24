import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../kotlin/Lazy.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { LockBasedStorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { ErasureProjectionComputer } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/ErasureProjectionComputer.d.ts'
import type { ErasureTypeAttributes } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/ErasureTypeAttributes.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeParameterErasureOptions } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeParameterErasureOptions.d.ts'
import type { TypeParameterUpperBoundEraser$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeParameterUpperBoundEraser$Companion.d.ts'
import type { TypeParameterUpperBoundEraser$DataToEraseUpperBound } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeParameterUpperBoundEraser$DataToEraseUpperBound.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
import type { ErrorType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/error/ErrorType.d.ts'
export class TypeParameterUpperBoundEraser extends Object {
    static Companion: TypeParameterUpperBoundEraser$Companion;
    constructor(arg0: ErasureProjectionComputer, arg1: TypeParameterErasureOptions)
    constructor(arg0: ErasureProjectionComputer, arg1: TypeParameterErasureOptions, arg2: number, arg3: DefaultConstructorMarker)
    // private erroneousErasedBound$delegate: Lazy<Object>;
    // private getErasedUpperBound: MemoizedFunctionToNotNull<TypeParameterUpperBoundEraser$DataToEraseUpperBound, KotlinType>;
    // private options: TypeParameterErasureOptions;
    // private projectionComputer: ErasureProjectionComputer;
    // private storage: LockBasedStorageManager;
    // private getDefaultType(arg0: ErasureTypeAttributes): KotlinType;
    getErasedUpperBound(arg0: TypeParameterDescriptor, arg1: ErasureTypeAttributes): KotlinType;
    // private getErasedUpperBoundInternal(arg0: TypeParameterDescriptor, arg1: ErasureTypeAttributes): KotlinType;
    // private getErroneousErasedBound(): ErrorType;
    // private substituteErasedUpperBounds(arg0: TypeSubstitutor, arg1: KotlinType[], arg2: ErasureTypeAttributes): KotlinType[];
}