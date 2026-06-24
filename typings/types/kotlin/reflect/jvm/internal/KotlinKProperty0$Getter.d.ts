import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty0$Getter } from '../../../../kotlin/reflect/KProperty0$Getter.d.ts'
import type { KotlinKProperty$Getter } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty$Getter.d.ts'
import type { KotlinKProperty0 } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty0.d.ts'
export class KotlinKProperty0$Getter<R extends unknown> extends KotlinKProperty$Getter<R> implements KProperty0$Getter<R> {
    constructor(property: KotlinKProperty0<R>)
    readonly property: KotlinKProperty0<R>;
    invoke(): R;
}