import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface StringBuilderFormattable extends Object{
    formatTo(buffer: StringBuilder): void;
}