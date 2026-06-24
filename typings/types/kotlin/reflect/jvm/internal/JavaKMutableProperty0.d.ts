import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty0 } from '../../../../kotlin/reflect/KMutableProperty0.d.ts'
import type { JavaKMutableProperty0$Setter } from '../../../../kotlin/reflect/jvm/internal/JavaKMutableProperty0$Setter.d.ts'
import type { JavaKProperty0 } from '../../../../kotlin/reflect/jvm/internal/JavaKProperty0.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export class JavaKMutableProperty0<V extends unknown> extends JavaKProperty0<V> implements KMutableProperty0<V> {
    constructor(container: KDeclarationContainerImpl, field: Field, rawBoundReceiver: Object | null, overriddenStorage: KCallableOverriddenStorage)
    readonly setter: JavaKMutableProperty0$Setter<V>;
    set(value: V): void;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<V>;
}