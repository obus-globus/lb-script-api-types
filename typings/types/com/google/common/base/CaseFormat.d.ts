import type { CharMatcher } from '../../../../com/google/common/base/CharMatcher.d.ts'
import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CaseFormat extends Enum<CaseFormat> {
    static LOWER_CAMEL: CaseFormat;
    static LOWER_HYPHEN: CaseFormat;
    static LOWER_UNDERSCORE: CaseFormat;
    static UPPER_CAMEL: CaseFormat;
    static UPPER_UNDERSCORE: CaseFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CaseFormat;
    static values(): CaseFormat[];
    constructor(arg2: CharMatcher, arg3: string, arg4: CaseFormat)
    // private wordBoundary: CharMatcher;
    // private wordSeparator: string;
    convert(format: CaseFormat, s: string): string;
    converterTo(targetFormat: CaseFormat): Converter<string, string>;
    normalizeFirstWord(word: string): string;
    normalizeWord(word: string): string;
    to(format: CaseFormat, str: string): string;
    name(): "LOWER_HYPHEN" | "LOWER_UNDERSCORE" | "LOWER_CAMEL" | "UPPER_CAMEL" | "UPPER_UNDERSCORE";
}