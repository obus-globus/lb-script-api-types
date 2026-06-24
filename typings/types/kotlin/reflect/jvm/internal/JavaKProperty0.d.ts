import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty0 } from '../../../../kotlin/reflect/KProperty0.d.ts'
import type { JavaKProperty } from '../../../../kotlin/reflect/jvm/internal/JavaKProperty.d.ts'
import type { JavaKProperty0$Getter } from '../../../../kotlin/reflect/jvm/internal/JavaKProperty0$Getter.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export class JavaKProperty0<V extends unknown> extends JavaKProperty<V> implements KProperty0<V> {
    constructor(container: KDeclarationContainerImpl, field: Field, rawBoundReceiver: Object | null, overriddenStorage: KCallableOverriddenStorage)
    readonly getter: JavaKProperty0$Getter<V>;
    get(): V;
    getDelegate(): Object | null;
    invoke(): V;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<V>;
}