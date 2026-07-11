import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
export class SimpleFormatterImpl extends Object {
    static compileToStringMinMaxArguments(parampattern: CharSequence, paramsb: StringBuilder, parammin: number, parammax: number): string;
    static formatAndAppend(paramcompiledPattern: string, paramappendTo: StringBuilder, paramoffsets: number[], ...paramvalues: (Object | null)[]): StringBuilder;
    static formatAndReplace(paramcompiledPattern: string, paramresult: StringBuilder, paramoffsets: number[], ...paramvalues: (Object | null)[]): StringBuilder;
    static formatCompiledPattern(paramcompiledPattern: string, ...paramvalues: (Object | null)[]): string;
    static formatPrefixSuffix(paramcompiledPattern: string, paramfield: Format$Field, paramstart: number, paramend: number, paramoutput: FormattedStringBuilder): number;
    static formatRawPattern(parampattern: string, parammin: number, parammax: number, ...paramvalues: (Object | null)[]): string;
    static getArgumentLimit(paramcompiledPattern: string): number;
    static getLength(paramcompiledPattern: string, paramcodePoints: boolean): number;
    static getPrefixLength(paramcompiledPattern: string): number;
    static getTextWithNoArguments(paramcompiledPattern: string): string;
    private constructor()
}