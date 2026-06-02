import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Lexer$LineInfoReceiver extends Object{
    lineInfo(line: number, linePosition: number): void;
}