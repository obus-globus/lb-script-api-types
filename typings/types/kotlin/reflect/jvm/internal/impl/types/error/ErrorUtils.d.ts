import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { ErrorClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/error/ErrorClassDescriptor.d.ts'
import type { ErrorScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/error/ErrorScope.d.ts'
import type { ErrorScopeKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/error/ErrorScopeKind.d.ts'
import type { ErrorType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/error/ErrorType.d.ts'
import type { ErrorTypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/error/ErrorTypeConstructor.d.ts'
import type { ErrorTypeKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/error/ErrorTypeKind.d.ts'
export class ErrorUtils extends Object {
    static INSTANCE: ErrorUtils;
    static createErrorScope(paramarg0: ErrorScopeKind, paramarg1: boolean, ...paramarg2: string[]): ErrorScope;
    static createErrorScope(paramarg0: ErrorScopeKind, ...paramarg1: string[]): ErrorScope;
    static createErrorType(paramarg0: ErrorTypeKind, ...paramarg1: string[]): ErrorType;
    static isError(paramarg0: DeclarationDescriptor): boolean;
    static isUninferredTypeVariable(paramarg0: KotlinType): boolean;
    private constructor()
    createErrorType(arg0: ErrorTypeKind, arg1: TypeConstructor, ...arg2: string[]): ErrorType;
    createErrorTypeConstructor(arg0: ErrorTypeKind, ...arg1: string[]): ErrorTypeConstructor;
    createErrorTypeWithArguments(arg0: ErrorTypeKind, arg1: TypeProjection[], ...arg2: string[]): ErrorType;
    createErrorTypeWithArguments(arg0: ErrorTypeKind, arg1: TypeProjection[], arg2: TypeConstructor, ...arg3: string[]): ErrorType;
    getErrorClass(): ErrorClassDescriptor;
    getErrorModule(): ModuleDescriptor;
    getErrorPropertyGroup(): PropertyDescriptor[];
    getErrorPropertyType(): KotlinType;
    getErrorTypeForLoopInSupertypes(): KotlinType;
    // private isErrorClass(arg0: DeclarationDescriptor): boolean;
    unresolvedTypeAsItIs(arg0: KotlinType): string;
}