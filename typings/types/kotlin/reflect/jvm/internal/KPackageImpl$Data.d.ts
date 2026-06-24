import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KCallable } from '../../../../kotlin/reflect/KCallable.d.ts'
import type { KDeclarationContainerImpl$Data } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Data.d.ts'
import type { KPackageImpl } from '../../../../kotlin/reflect/jvm/internal/KPackageImpl.d.ts'
import type { ReflectKotlinClass } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/components/ReflectKotlinClass.d.ts'
import type { KmPackage } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmPackage.d.ts'
import type { MemberScope } from '../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
export class KPackageImpl$Data extends KDeclarationContainerImpl$Data {
    constructor(null_: KPackageImpl)
    readonly kmPackages: KmPackage[];
    readonly kotlinClass: ReflectKotlinClass | null;
    readonly members: KCallable<Object>[];
    readonly multifileFacade: Class<Object> | null;
    readonly scope: MemberScope;
}