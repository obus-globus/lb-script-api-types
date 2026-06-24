import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty1$Setter } from '../../../../kotlin/reflect/KMutableProperty1$Setter.d.ts'
import type { KotlinKMutableProperty1 } from '../../../../kotlin/reflect/jvm/internal/KotlinKMutableProperty1.d.ts'
import type { KotlinKProperty$Setter } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty$Setter.d.ts'
export class KotlinKMutableProperty1$Setter<T extends unknown, V extends unknown> extends KotlinKProperty$Setter<V> implements KMutableProperty1$Setter<T, V> {
    constructor(property: KotlinKMutableProperty1<T, V>)
    readonly property: KotlinKMutableProperty1<T, V>;
    invoke(receiver: T, value: V): void;
}