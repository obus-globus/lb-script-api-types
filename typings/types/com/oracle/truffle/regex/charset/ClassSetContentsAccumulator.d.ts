import type { ClassSetContents } from '../../../../../com/oracle/truffle/regex/charset/ClassSetContents.d.ts'
import type { Range } from '../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { Encoding } from '../../../../../com/oracle/truffle/regex/tregex/string/Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClassSetContentsAccumulator extends Object {
    constructor()
    readonly codePointSet: Range[];
    // private mayContainStrings: boolean;
    readonly strings: string[];
    addAll(classSet: ClassSetContents): void;
    clear(): void;
    getCodePointSet(): (Object | null)[];
    getStrings(): string[];
    isCodePointSetOnly(): boolean;
    mayContainStrings(): boolean;
    removeAll(classSet: ClassSetContents, encoding: Encoding): void;
    retainAll(classSet: ClassSetContents): void;
}