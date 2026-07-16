import type { StringTransform } from '../../../../com/ibm/icu/text/StringTransform.d.ts'
import type { SymbolTable } from '../../../../com/ibm/icu/text/SymbolTable.d.ts'
import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class UnicodeRegex extends Object implements StringTransform, Freezable<UnicodeRegex>, Cloneable {
    static appendLines(paramarg0: string[], paramarg1: InputStream, paramarg2: string): string[];
    static appendLines(paramarg0: string[], paramarg1: string, paramarg2: string): string[];
    static compile(paramarg0: string): Pattern;
    static compile(paramarg0: string, paramarg1: number): Pattern;
    static fix(paramarg0: string): string;
    constructor()
    // private LongestFirst: (param0: Object, param1: Object) => number;
    readonly bnfCommentString: string;
    readonly bnfLineSeparator: string;
    readonly bnfVariableInfix: string;
    readonly symbolTable: SymbolTable;
    protected clone(): Object;
    cloneAsThawed(): UnicodeRegex;
    compileBnf(arg0: string): string;
    compileBnf(arg0: string[]): string;
    freeze(): UnicodeRegex;
    getBnfCommentString(): string;
    getBnfLineSeparator(): string;
    getBnfVariableInfix(): string;
    getSymbolTable(): SymbolTable;
    // private getVariables(arg0: string[]): { [key: string]: string };
    isFrozen(): boolean;
    // private processSet(arg0: string, arg1: number, arg2: StringBuilder, arg3: string[], arg4: ParsePosition): number;
    setBnfCommentString(arg0: string): void;
    setBnfLineSeparator(arg0: string): void;
    setBnfVariableInfix(arg0: string): void;
    setSymbolTable(arg0: SymbolTable): UnicodeRegex;
    transform(arg0: string): string;
}