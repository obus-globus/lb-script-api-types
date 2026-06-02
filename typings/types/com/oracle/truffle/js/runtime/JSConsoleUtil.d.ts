import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSConsoleUtil extends Object {
    constructor()
    readonly consoleIndentation: number;
    readonly countMap: Map<TruffleString, number>;
    readonly timeMap: Map<TruffleString, number>;
    decConsoleIndentation(): void;
    getConsoleIndentation(): number;
    getConsoleIndentationString(): string;
    getCountMap(): Map<TruffleString, number>;
    getTimeMap(): Map<TruffleString, number>;
    incConsoleIndentation(): void;
}