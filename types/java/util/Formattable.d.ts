import type { Formatter } from '../../java/util/Formatter.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Formattable extends Object{
    formatTo(arg0: Formatter, arg1: number, arg2: number, arg3: number): void;
}