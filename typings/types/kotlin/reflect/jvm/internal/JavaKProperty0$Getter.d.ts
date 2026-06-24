import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty0$Getter } from '../../../../kotlin/reflect/KProperty0$Getter.d.ts'
import type { JavaKProperty$Getter } from '../../../../kotlin/reflect/jvm/internal/JavaKProperty$Getter.d.ts'
import type { JavaKProperty0 } from '../../../../kotlin/reflect/jvm/internal/JavaKProperty0.d.ts'
export class JavaKProperty0$Getter<R extends unknown> extends JavaKProperty$Getter<R> implements KProperty0$Getter<R> {
    constructor(property: JavaKProperty0<R>)
    readonly property: JavaKProperty0<R>;
    invoke(): R;
}