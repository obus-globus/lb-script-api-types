import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class JSONHelper$JSONStringBuilder extends Object {
    private constructor()
    appendTo(sb: StringBuilder): void;
    toString(): string;
}