import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KProperty1 } from '../../../../kotlin/reflect/KProperty1.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKProperty } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty.d.ts'
import type { KotlinKProperty1$Getter } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty1$Getter.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
export class KotlinKProperty1<T extends unknown, V extends unknown> extends KotlinKProperty<V> implements KProperty1<T, V> {
    constructor(container: KDeclarationContainerImpl, signature: string, rawBoundReceiver: Object | null, kmProperty: KmProperty, overriddenStorage: KCallableOverriddenStorage)
    // private delegateSource: Lazy<Member>;
    readonly getter: KotlinKProperty1$Getter<T, V>;
    get(receiver: T): V;
    getDelegate(receiver: T): Object | null;
    invoke(receiver: T): V;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<V>;
}