import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Pattern } from '../../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { StringTransform } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringTransform.d.ts'
import type { SymbolTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SymbolTable.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
export class UnicodeRegex extends Object implements Cloneable, StringTransform, Freezable<UnicodeRegex> {
    static appendLines(paramresult: string[], paraminputStream: InputStream, paramencoding: string): string[];
    static appendLines(paramresult: string[], paramfile: string, paramencoding: string): string[];
    static compile(paramregex: string): Pattern;
    static compile(paramregex: string, paramoptions: number): Pattern;
    static fix(paramregex: string): string;
    constructor()
    // private LongestFirst: (param0: Object, param1: Object) => number;
    readonly bnfCommentString: string;
    readonly bnfLineSeparator: string;
    readonly bnfVariableInfix: string;
    readonly symbolTable: SymbolTable;
    protected clone(): Object;
    cloneAsThawed(): UnicodeRegex;
    compileBnf(bnfLines: string): string;
    compileBnf(lines: string[]): string;
    freeze(): UnicodeRegex;
    getBnfCommentString(): string;
    getBnfLineSeparator(): string;
    getBnfVariableInfix(): string;
    getSymbolTable(): SymbolTable;
    // private getVariables(lines: string[]): JavaMap<string, string>;
    isFrozen(): boolean;
    // private processSet(regex: string, i: number, result: StringBuilder, temp: string[], pos: ParsePosition): number;
    setBnfCommentString(bnfCommentString: string): void;
    setBnfLineSeparator(bnfLineSeparator: string): void;
    setBnfVariableInfix(bnfVariableInfix: string): void;
    setSymbolTable(symbolTable: SymbolTable): UnicodeRegex;
    transform(regex: string): string;
}