import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty0$Getter } from '../../../../kotlin/reflect/KProperty0$Getter.d.ts'
import type { DescriptorKProperty$Getter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Getter.d.ts'
import type { DescriptorKProperty0 } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty0.d.ts'
export class DescriptorKProperty0$Getter<R extends unknown> extends DescriptorKProperty$Getter<R> implements KProperty0$Getter<R> {
    constructor(property: DescriptorKProperty0<R>)
    readonly property: DescriptorKProperty0<R>;
    invoke(): R;
}