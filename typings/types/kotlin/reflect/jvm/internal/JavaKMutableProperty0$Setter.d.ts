import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty0$Setter } from '../../../../kotlin/reflect/KMutableProperty0$Setter.d.ts'
import type { JavaKMutableProperty0 } from '../../../../kotlin/reflect/jvm/internal/JavaKMutableProperty0.d.ts'
import type { JavaKProperty$Setter } from '../../../../kotlin/reflect/jvm/internal/JavaKProperty$Setter.d.ts'
export class JavaKMutableProperty0$Setter<R extends unknown> extends JavaKProperty$Setter<R> implements KMutableProperty0$Setter<R> {
    constructor(property: JavaKMutableProperty0<R>)
    readonly property: JavaKMutableProperty0<R>;
    invoke(value: R): void;
}