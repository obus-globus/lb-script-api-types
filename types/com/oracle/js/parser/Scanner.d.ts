import type { Scanner$State } from '../../../../com/oracle/js/parser/Scanner$State.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Scanner extends Object {
    constructor(scanner: Scanner, state: Scanner$State)
    constructor(content: string, line: number, start: number, length: number)
    // private ch0: string;
    // private ch1: string;
    // private ch2: string;
    // private ch3: string;
    // private content: string;
    // private limit: number;
    // private line: number;
    // private position: number;
    atEOF(): boolean;
    charAt(i: number): string;
    reset(i: number): void;
    restoreState(state: Scanner$State): void;
    saveState(): Scanner$State;
    skip(n: number): void;
}