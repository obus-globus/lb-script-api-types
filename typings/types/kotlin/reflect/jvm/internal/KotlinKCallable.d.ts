import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { ReflectKCallableImpl } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallableImpl.d.ts'
export abstract class KotlinKCallable<R extends unknown> extends ReflectKCallableImpl<R> {
    constructor(overriddenStorage: KCallableOverriddenStorage)
    /*not mapped: */ getAnnotations(): Annotation[];
    /*not mapped: */ isPackagePrivate(): boolean;
    /*not mapped: */ getRawBoundReceiver(): Object | null;
}