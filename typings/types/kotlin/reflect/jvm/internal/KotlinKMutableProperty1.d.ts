import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty1 } from '../../../../kotlin/reflect/KMutableProperty1.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKMutableProperty1$Setter } from '../../../../kotlin/reflect/jvm/internal/KotlinKMutableProperty1$Setter.d.ts'
import type { KotlinKProperty1 } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty1.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
export class KotlinKMutableProperty1<T extends unknown, V extends unknown> extends KotlinKProperty1<T, V> implements KMutableProperty1<T, V> {
    constructor(container: KDeclarationContainerImpl, signature: string, rawBoundReceiver: Object | null, kmProperty: KmProperty, overriddenStorage: KCallableOverriddenStorage)
    readonly setter: KotlinKMutableProperty1$Setter<T, V>;
    set(receiver: T, value: V): void;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<V>;
}