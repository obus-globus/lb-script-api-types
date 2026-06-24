import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty0$Setter } from '../../../../kotlin/reflect/KMutableProperty0$Setter.d.ts'
import type { KotlinKMutableProperty0 } from '../../../../kotlin/reflect/jvm/internal/KotlinKMutableProperty0.d.ts'
import type { KotlinKProperty$Setter } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty$Setter.d.ts'
export class KotlinKMutableProperty0$Setter<R extends unknown> extends KotlinKProperty$Setter<R> implements KMutableProperty0$Setter<R> {
    constructor(property: KotlinKMutableProperty0<R>)
    readonly property: KotlinKMutableProperty0<R>;
    invoke(value: R): void;
}