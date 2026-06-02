import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MicroPropsMutator<T extends Object | number | string | boolean> extends Object{
    mutateMicros(arg0: MicroProps, arg1: T): void;
}