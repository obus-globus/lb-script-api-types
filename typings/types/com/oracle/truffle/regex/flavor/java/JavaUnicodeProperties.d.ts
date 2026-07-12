import type { UnicodeProperties } from '../../../../../../com/oracle/truffle/regex/charset/UnicodeProperties.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JavaUnicodeProperties extends Object {
    static DOT: (Object | null)[];
    static DOT_UNIX: (Object | null)[];
    static JAVA_LINE_TERMINATOR: (Object | null)[];
    private constructor(unicode: UnicodeProperties)
    // private alphabetic: (Object | null)[];
    // private blank: (Object | null)[];
    // private defined: (Object | null)[];
    // private digit: (Object | null)[];
    // private graph: (Object | null)[];
    // private identifierIgnorable: (Object | null)[];
    // private javaIdentifierPart: (Object | null)[];
    // private javaIdentifierStart: (Object | null)[];
    // private letterOrDigit: (Object | null)[];
    // private lowerCase: (Object | null)[];
    // private lowerUpperTitleCase: (Object | null)[];
    // private nonDigit: (Object | null)[];
    // private nonSpace: (Object | null)[];
    // private nonWord: (Object | null)[];
    // private space: (Object | null)[];
    // private spaceChar: (Object | null)[];
    // private unicode: UnicodeProperties;
    // private unicodeIdentifierPart: (Object | null)[];
    // private unicodeIdentifierStart: (Object | null)[];
    // private unicodeLetterOrDigit: (Object | null)[];
    // private upperCase: (Object | null)[];
    // private whiteSpace: (Object | null)[];
    // private word: (Object | null)[];
    forPOSIXName(propName: string, caseIns: boolean): (Object | null)[];
    forUnicodeProperty(propName: string, caseIns: boolean): (Object | null)[];
    getBlock(name: string): (Object | null)[];
    // private getPosixPredicate(name: string, caseIns: boolean): (Object | null)[];
    getProperty(name: string, caseIns: boolean): (Object | null)[];
    getScript(name: string): (Object | null)[];
    // private getUnicodePredicate(name: string, caseIns: boolean): (Object | null)[];
    // private unionOfProperties(initial: (Object | null)[], ...properties: string[]): (Object | null)[];
    // private unionOfProperties(...properties: string[]): (Object | null)[];
}