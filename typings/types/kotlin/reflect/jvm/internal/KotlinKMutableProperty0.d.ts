import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty0 } from '../../../../kotlin/reflect/KMutableProperty0.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKMutableProperty0$Setter } from '../../../../kotlin/reflect/jvm/internal/KotlinKMutableProperty0$Setter.d.ts'
import type { KotlinKProperty0 } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty0.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
export class KotlinKMutableProperty0<V extends unknown> extends KotlinKProperty0<V> implements KMutableProperty0<V> {
    constructor(container: KDeclarationContainerImpl, signature: string, rawBoundReceiver: Object | null, kmProperty: KmProperty, overriddenStorage: KCallableOverriddenStorage)
    readonly setter: KotlinKMutableProperty0$Setter<V>;
    set(value: V): void;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<V>;
}