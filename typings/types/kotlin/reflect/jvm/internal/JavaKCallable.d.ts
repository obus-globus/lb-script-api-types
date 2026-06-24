import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKCallableImpl } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallableImpl.d.ts'
import type { Modality } from '../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
export abstract class JavaKCallable<R extends unknown> extends ReflectKCallableImpl<R> {
    constructor(container: KDeclarationContainerImpl, member: Member, rawBoundReceiver: Object | null, overriddenStorage: KCallableOverriddenStorage)
    readonly annotations: Annotation[];
    readonly container: KDeclarationContainerImpl;
    /*not mapped: */ isPackagePrivate(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    readonly member: Member;
    readonly modality: Modality;
    readonly rawBoundReceiver: Object | null;
    readonly visibility: KVisibility | null;
}