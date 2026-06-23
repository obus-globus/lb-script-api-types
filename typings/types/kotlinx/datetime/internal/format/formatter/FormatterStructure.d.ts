import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FormatterStructure<T extends unknown> extends Object{
    format(obj: T, builder: Appendable, minusNotRequired: boolean): void;
}