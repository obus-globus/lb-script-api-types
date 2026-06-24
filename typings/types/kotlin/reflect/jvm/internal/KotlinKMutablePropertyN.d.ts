import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty } from '../../../../kotlin/reflect/KMutableProperty.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKMutablePropertyN$Setter } from '../../../../kotlin/reflect/jvm/internal/KotlinKMutablePropertyN$Setter.d.ts'
import type { KotlinKPropertyN } from '../../../../kotlin/reflect/jvm/internal/KotlinKPropertyN.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
export class KotlinKMutablePropertyN<V extends unknown> extends KotlinKPropertyN<V> implements KMutableProperty<V> {
    constructor(container: KDeclarationContainerImpl, signature: string, rawBoundReceiver: Object | null, kmProperty: KmProperty, overriddenStorage: KCallableOverriddenStorage)
    readonly setter: KotlinKMutablePropertyN$Setter<V>;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<V>;
}