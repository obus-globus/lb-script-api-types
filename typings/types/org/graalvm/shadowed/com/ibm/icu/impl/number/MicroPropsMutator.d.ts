import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
export interface MicroPropsMutator<T extends unknown> extends Object{
    mutateMicros(micros: MicroProps, value: T): void;
}