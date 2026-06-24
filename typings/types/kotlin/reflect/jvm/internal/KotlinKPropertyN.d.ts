import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKProperty } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty.d.ts'
import type { KotlinKPropertyN$Getter } from '../../../../kotlin/reflect/jvm/internal/KotlinKPropertyN$Getter.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
export class KotlinKPropertyN<V extends unknown> extends KotlinKProperty<V> {
    constructor(container: KDeclarationContainerImpl, signature: string, rawBoundReceiver: Object | null, kmProperty: KmProperty, overriddenStorage: KCallableOverriddenStorage)
    readonly getter: KotlinKPropertyN$Getter<V>;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<V>;
}