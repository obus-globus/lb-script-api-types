import type { JavaMap } from '../../../JavaMap.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { CharBuffer } from '../../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Strings extends Object {
    static EMPTY: string;
    static UTF_8: Charset;
    static addStringToArray(paramarg0: string[], paramarg1: string): string[];
    static applyRelativePath(paramarg0: string, paramarg1: string): string;
    static arrayToCommaDelimitedString(paramarg0: Object[]): string;
    static arrayToDelimitedString(paramarg0: Object[], paramarg1: string): string;
    static ascii(paramarg0: CharSequence): number[];
    static ascii(paramarg0: number[]): string;
    static capitalize(paramarg0: string): string;
    static clean(paramarg0: CharSequence): CharSequence;
    static clean(paramarg0: string): string;
    static cleanPath(paramarg0: string): string;
    static collectionToCommaDelimitedString(paramarg0: Object[]): string;
    static collectionToDelimitedString(paramarg0: Object[], paramarg1: string): string;
    static collectionToDelimitedString(paramarg0: Object[], paramarg1: string, paramarg2: string, paramarg3: string): string;
    static commaDelimitedListToSet(paramarg0: string): string[];
    static commaDelimitedListToStringArray(paramarg0: string): string[];
    static concatenateStringArrays(paramarg0: string[], paramarg1: string[]): string[];
    static containsWhitespace(paramarg0: CharSequence): boolean;
    static containsWhitespace(paramarg0: string): boolean;
    static countOccurrencesOf(paramarg0: string, paramarg1: string): number;
    static delete(paramarg0: string, paramarg1: string): string;
    static deleteAny(paramarg0: string, paramarg1: string): string;
    static delimitedListToStringArray(paramarg0: string, paramarg1: string): string[];
    static delimitedListToStringArray(paramarg0: string, paramarg1: string, paramarg2: string): string[];
    static endsWithIgnoreCase(paramarg0: string, paramarg1: string): boolean;
    static getFilename(paramarg0: string): string;
    static getFilenameExtension(paramarg0: string): string;
    static hasLength(paramarg0: CharSequence): boolean;
    static hasLength(paramarg0: string): boolean;
    static hasText(paramarg0: CharSequence): boolean;
    static hasText(paramarg0: string): boolean;
    static mergeStringArrays(paramarg0: string[], paramarg1: string[]): string[];
    static nespace(paramarg0: StringBuilder): StringBuilder;
    static parseLocaleString(paramarg0: string): Locale;
    static pathEquals(paramarg0: string, paramarg1: string): boolean;
    static quote(paramarg0: string): string;
    static quoteIfString(paramarg0: Object): Object;
    static removeDuplicateStrings(paramarg0: string[]): string[];
    static replace(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static sortStringArray(paramarg0: string[]): string[];
    static split(paramarg0: string, paramarg1: string): string[];
    static splitArrayElementsIntoProperties(paramarg0: string[], paramarg1: string): JavaMap<any, any>;
    static splitArrayElementsIntoProperties(paramarg0: string[], paramarg1: string, paramarg2: string): JavaMap<any, any>;
    static startsWithIgnoreCase(paramarg0: string, paramarg1: string): boolean;
    static stripFilenameExtension(paramarg0: string): string;
    static substringMatch(paramarg0: CharSequence, paramarg1: number, paramarg2: CharSequence): boolean;
    static toBinary(paramarg0: number): string;
    static toBinary(paramarg0: number[]): string;
    static toHex(paramarg0: number[]): string;
    static toLanguageTag(paramarg0: Locale): string;
    static toStringArray(paramarg0: string[]): string[];
    static toStringArray(paramarg0: Enumeration<string>): string[];
    static tokenizeToStringArray(paramarg0: string, paramarg1: string): string[];
    static tokenizeToStringArray(paramarg0: string, paramarg1: string, paramarg2: boolean, paramarg3: boolean): string[];
    static trimAllWhitespace(paramarg0: string): string;
    static trimArrayElements(paramarg0: string[]): string[];
    static trimLeadingCharacter(paramarg0: string, paramarg1: string): string;
    static trimLeadingWhitespace(paramarg0: string): string;
    static trimTrailingCharacter(paramarg0: string, paramarg1: string): string;
    static trimTrailingWhitespace(paramarg0: string): string;
    static trimWhitespace(paramarg0: string): string;
    static uncapitalize(paramarg0: string): string;
    static unqualify(paramarg0: string): string;
    static unqualify(paramarg0: string, paramarg1: string): string;
    static utf8(paramarg0: CharSequence): number[];
    static utf8(paramarg0: number[]): string;
    static wrap(paramarg0: CharSequence): CharBuffer;
    private constructor()
}