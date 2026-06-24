import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeProjection } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { UnwrappedType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { NewCapturedTypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewCapturedTypeConstructor.d.ts'
import type { CaptureStatus } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CaptureStatus.d.ts'
import type { CapturedTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeMarker.d.ts'
export class NewCapturedType extends SimpleType implements CapturedTypeMarker {
    constructor(arg0: CaptureStatus, arg1: UnwrappedType, arg2: TypeProjection, arg3: TypeParameterDescriptor)
    constructor(arg0: CaptureStatus, arg1: NewCapturedTypeConstructor, arg2: UnwrappedType, arg3: TypeAttribute<any>[], arg4: boolean, arg5: boolean)
    constructor(arg0: CaptureStatus, arg1: NewCapturedTypeConstructor, arg2: UnwrappedType, arg3: TypeAttribute<any>[], arg4: boolean, arg5: boolean, arg6: number, arg7: DefaultConstructorMarker)
    readonly attributes: TypeAttribute<any>[];
    readonly captureStatus: CaptureStatus;
    // inaccessible (TS-reserved member name): readonly constructor: NewCapturedTypeConstructor;
    // private isMarkedNullable: boolean;
    // private isProjectionNotNull: boolean;
    readonly lowerType: UnwrappedType;
    getArguments(): TypeProjection[];
    getAttributes(): TypeAttribute<any>[];
    getCaptureStatus(): CaptureStatus;
    getConstructor(): NewCapturedTypeConstructor;
    getLowerType(): UnwrappedType;
    getMemberScope(): MemberScope;
    isMarkedNullable(): boolean;
    isProjectionNotNull(): boolean;
    makeNullableAsSpecified(arg0: boolean): NewCapturedType;
    refine(arg0: KotlinTypeRefiner): NewCapturedType;
    replaceAttributes(arg0: TypeAttribute<any>[]): SimpleType;
}