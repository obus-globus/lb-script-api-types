import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class LineBuffer extends Object {
    constructor()
    // private line: StringBuilder;
    // private sawReturn: boolean;
    add(arg0: string[], arg1: number, arg2: number): void;
    finish(): void;
    // private finishLine(arg0: boolean): boolean;
    handleLine(arg0: string, arg1: string): void;
}