import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Transform extends Object {
    static appendEscapingCData(parambuf: StringBuilder, paramstr: string): void;
    static escapeHtmlTags(paraminput: string): string;
    static escapeJsonControlCharacters(paraminput: string): string;
    private constructor()
}