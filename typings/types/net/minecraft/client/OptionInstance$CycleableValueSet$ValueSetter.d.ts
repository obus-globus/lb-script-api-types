import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
export interface OptionInstance$CycleableValueSet$ValueSetter<T extends unknown> extends Object{
    set(instance: OptionInstance<T>, value: T): void;
}