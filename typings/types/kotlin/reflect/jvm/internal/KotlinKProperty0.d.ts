import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KProperty0 } from '../../../../kotlin/reflect/KProperty0.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKProperty } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty.d.ts'
import type { KotlinKProperty0$Getter } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty0$Getter.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
export class KotlinKProperty0<V extends unknown> extends KotlinKProperty<V> implements KProperty0<V> {
    constructor(container: KDeclarationContainerImpl, signature: string, rawBoundReceiver: Object | null, kmProperty: KmProperty, overriddenStorage: KCallableOverriddenStorage)
    // private delegateValue: Lazy<Object>;
    readonly getter: KotlinKProperty0$Getter<V>;
    get(): V;
    getDelegate(): Object | null;
    invoke(): V;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<V>;
}