import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Format$Field } from '../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class SimpleFormatterImpl extends Object {
    static compileToStringMinMaxArguments(paramarg0: CharSequence, paramarg1: StringBuilder, paramarg2: number, paramarg3: number): string;
    static formatAndAppend(paramarg0: string, paramarg1: StringBuilder, paramarg2: number[], ...paramarg3: CharSequence[]): StringBuilder;
    static formatAndReplace(paramarg0: string, paramarg1: StringBuilder, paramarg2: number[], ...paramarg3: CharSequence[]): StringBuilder;
    static formatCompiledPattern(paramarg0: string, ...paramarg1: CharSequence[]): string;
    static formatPrefixSuffix(paramarg0: string, paramarg1: Format$Field, paramarg2: number, paramarg3: number, paramarg4: FormattedStringBuilder): number;
    static formatRawPattern(paramarg0: string, paramarg1: number, paramarg2: number, ...paramarg3: CharSequence[]): string;
    static getArgumentLimit(paramarg0: string): number;
    static getLength(paramarg0: string, paramarg1: boolean): number;
    static getPrefixLength(paramarg0: string): number;
    static getTextWithNoArguments(paramarg0: string): string;
    private constructor()
}