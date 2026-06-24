import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty1$Getter } from '../../../../kotlin/reflect/KProperty1$Getter.d.ts'
import type { KotlinKProperty$Getter } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty$Getter.d.ts'
import type { KotlinKProperty1 } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty1.d.ts'
export class KotlinKProperty1$Getter<T extends unknown, V extends unknown> extends KotlinKProperty$Getter<V> implements KProperty1$Getter<T, V> {
    constructor(property: KotlinKProperty1<T, V>)
    readonly property: KotlinKProperty1<T, V>;
    invoke(receiver: T): V;
}