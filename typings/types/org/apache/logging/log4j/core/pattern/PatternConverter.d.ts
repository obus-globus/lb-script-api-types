import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface PatternConverter extends Object{
    format(obj: Object, toAppendTo: StringBuilder): void;
    getName(): string;
    getStyleClass(e: Object): string;
}