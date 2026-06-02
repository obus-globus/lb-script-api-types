import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty0$Getter } from '../../../../kotlin/reflect/KProperty0$Getter.d.ts'
import type { KProperty0Impl } from '../../../../kotlin/reflect/jvm/internal/KProperty0Impl.d.ts'
import type { KPropertyImpl$Getter } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Getter.d.ts'
export class KProperty0Impl$Getter<R extends Object | number | string | boolean> extends KPropertyImpl$Getter<R> implements KProperty0$Getter<R> {
    constructor(property: KProperty0Impl<R>)
    readonly property: KProperty0Impl<R>;
    invoke(): R;
}