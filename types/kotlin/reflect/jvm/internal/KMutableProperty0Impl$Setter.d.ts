import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty0$Setter } from '../../../../kotlin/reflect/KMutableProperty0$Setter.d.ts'
import type { KMutableProperty0Impl } from '../../../../kotlin/reflect/jvm/internal/KMutableProperty0Impl.d.ts'
import type { KPropertyImpl$Setter } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Setter.d.ts'
export class KMutableProperty0Impl$Setter<R extends Object | number | string | boolean> extends KPropertyImpl$Setter<R> implements KMutableProperty0$Setter<R> {
    constructor(property: KMutableProperty0Impl<R>)
    readonly property: KMutableProperty0Impl<R>;
    invoke(value: R): void;
}