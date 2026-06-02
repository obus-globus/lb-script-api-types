import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class LineBuffer extends Object {
    constructor()
    // private line: StringBuilder;
    // private sawReturn: boolean;
    add(cbuf: string[], off: number, len: number): void;
    finish(): void;
    // private finishLine(sawNewline: boolean): boolean;
    handleLine(line: string, end: string): void;
}