import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSConsoleUtil extends Object {
    constructor()
    readonly consoleIndentation: number;
    readonly countMap: JavaMap<TruffleString, number>;
    readonly timeMap: JavaMap<TruffleString, number>;
    decConsoleIndentation(): void;
    getConsoleIndentation(): number;
    getConsoleIndentationString(): string;
    getCountMap(): JavaMap<TruffleString, number>;
    getTimeMap(): JavaMap<TruffleString, number>;
    incConsoleIndentation(): void;
}