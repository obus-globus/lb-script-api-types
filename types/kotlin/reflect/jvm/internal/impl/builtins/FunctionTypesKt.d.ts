import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { FunctionTypeKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionTypeKind.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FqNameUnsafe } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
export class FunctionTypesKt extends Object {
    static contextFunctionTypeParamsCount(paramarg0: KotlinType): number;
    static createFunctionType(paramarg0: KotlinBuiltIns, paramarg1: AnnotationDescriptor[], paramarg2: KotlinType, paramarg3: (Object | null)[], paramarg4: (Object | null)[], paramarg5: Name[], paramarg6: KotlinType, paramarg7: boolean): SimpleType;
    static extractParameterNameFromFunctionTypeArgument(paramarg0: KotlinType): Name;
    static getContextReceiverTypesFromFunctionType(paramarg0: KotlinType): KotlinType[];
    static getFunctionDescriptor(paramarg0: KotlinBuiltIns, paramarg1: number, paramarg2: boolean): ClassDescriptor;
    static getFunctionTypeArgumentProjections(paramarg0: KotlinType, paramarg1: (Object | null)[], paramarg2: (Object | null)[], paramarg3: Name[], paramarg4: KotlinType, paramarg5: KotlinBuiltIns): TypeProjection[];
    static getFunctionTypeKind(paramarg0: DeclarationDescriptor): FunctionTypeKind;
    static getFunctionTypeKind(paramarg0: KotlinType): FunctionTypeKind;
    static getReceiverTypeFromFunctionType(paramarg0: KotlinType): KotlinType;
    static getReturnTypeFromFunctionType(paramarg0: KotlinType): KotlinType;
    static getValueParameterTypesFromFunctionType(paramarg0: KotlinType): TypeProjection[];
    static isBuiltinExtensionFunctionalType(paramarg0: KotlinType): boolean;
    static isBuiltinFunctionalClassDescriptor(paramarg0: DeclarationDescriptor): boolean;
    static isBuiltinFunctionalType(paramarg0: KotlinType): boolean;
    static isFunctionType(paramarg0: KotlinType): boolean;
    static isNumberedFunctionClassFqName(paramarg0: FqNameUnsafe): boolean;
    static isSuspendFunctionType(paramarg0: KotlinType): boolean;
    static withContextReceiversFunctionAnnotation(paramarg0: AnnotationDescriptor[], paramarg1: KotlinBuiltIns, paramarg2: number): AnnotationDescriptor[];
    static withExtensionFunctionAnnotation(paramarg0: AnnotationDescriptor[], paramarg1: KotlinBuiltIns): AnnotationDescriptor[];
}