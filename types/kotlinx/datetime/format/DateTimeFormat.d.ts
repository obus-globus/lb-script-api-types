import type { Appendable } from '../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface DateTimeFormat<T extends Object | number | string | boolean> extends Object{
    format(value: T): string;
    formatTo<A extends Appendable>(appendable: A, value: T): A;
    parse(input: CharSequence): T;
    parseOrNull(input: CharSequence): T | null;
}