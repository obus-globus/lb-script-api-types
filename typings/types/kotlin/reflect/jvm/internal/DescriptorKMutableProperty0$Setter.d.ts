import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty0$Setter } from '../../../../kotlin/reflect/KMutableProperty0$Setter.d.ts'
import type { DescriptorKMutableProperty0 } from '../../../../kotlin/reflect/jvm/internal/DescriptorKMutableProperty0.d.ts'
import type { DescriptorKProperty$Setter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Setter.d.ts'
export class DescriptorKMutableProperty0$Setter<R extends unknown> extends DescriptorKProperty$Setter<R> implements KMutableProperty0$Setter<R> {
    constructor(property: DescriptorKMutableProperty0<R>)
    readonly property: DescriptorKMutableProperty0<R>;
    invoke(value: R): void;
}