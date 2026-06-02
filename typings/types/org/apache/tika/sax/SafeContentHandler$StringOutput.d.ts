import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SafeContentHandler$Output } from '../../../../org/apache/tika/sax/SafeContentHandler$Output.d.ts'
export class SafeContentHandler$StringOutput extends Object implements SafeContentHandler$Output {
    private constructor()
    // private builder: StringBuilder;
    toString(): string;
    write(arg0: string[], arg1: number, arg2: number): void;
}