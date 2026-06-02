import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { ClassSetContents } from '../../../../../../com/oracle/truffle/regex/charset/ClassSetContents.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token.d.ts'
import type { Token$BackReference } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$BackReference.d.ts'
import type { Token$CharacterClass } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$CharacterClass.d.ts'
import type { Token$ClassSet } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$ClassSet.d.ts'
import type { Token$InlineFlags } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$InlineFlags.d.ts'
import type { Token$LiteralCharacter } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$LiteralCharacter.d.ts'
import type { Token$LiteralString } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$LiteralString.d.ts'
import type { Token$Quantifier } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$Quantifier.d.ts'
import type { JsonObject } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Token$CharacterClassAtom extends Token {
    static createA(): Token;
    static createAlternation(): Token;
    static createAtomicGroupBegin(): Token;
    static createBackReference(paramgroupNr: number, paramnamedReference: boolean): Token$BackReference;
    static createBackReference(paramgroupNumbers: number[], paramnamedReference: boolean): Token$BackReference;
    static createCaptureGroupBegin(): Token;
    static createCaret(): Token;
    static createCharClass(paramcodePointSet: (Object | null)[]): Token$CharacterClass;
    static createCharClass(paramcodePointSet: (Object | null)[], paramwasSingleChar: boolean): Token$CharacterClass;
    static createCharacterClassAtom(paramcontents: ClassSetContents): Token;
    static createCharacterClassBegin(): Token;
    static createCharacterClassEnd(): Token;
    static createClassSetExpression(paramcontents: ClassSetContents): Token$ClassSet;
    static createConditionalBackReference(paramgroupNr: number, paramnamedReference: boolean): Token$BackReference;
    static createDollar(): Token;
    static createGroupEnd(): Token;
    static createInlineFlags(paramflags: AbstractRegexObject, paramglobal: boolean): Token$InlineFlags;
    static createLineBreak(): Token;
    static createLiteralCharacter(paramcodePoint: number): Token$LiteralCharacter;
    static createLiteralString(paramstart: number, paramend: number): Token$LiteralString;
    static createLookAheadAssertionBegin(): Token;
    static createLookAheadAssertionBegin(paramnegated: boolean): Token;
    static createLookBehindAssertionBegin(): Token;
    static createLookBehindAssertionBegin(paramnegated: boolean): Token;
    static createNonCaptureGroupBegin(): Token;
    static createNonWordBoundary(): Token;
    static createQuantifier(parammin: number, parammax: number, paramgreedy: boolean, parampossessive: boolean, paramsingleChar: boolean): Token$Quantifier;
    static createWordBoundary(): Token;
    static createZ(): Token;
    static createZLowerCase(): Token;
    constructor(contents: ClassSetContents)
    readonly contents: ClassSetContents;
    getContents(): ClassSetContents;
    toJson(): JsonObject;
}