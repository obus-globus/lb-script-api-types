import type { Class } from '../../java/lang/Class.d.ts'
import type { Pattern } from '../../java/util/regex/Pattern.d.ts'
import type { ValueConverter } from '../../joptsimple/ValueConverter.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class RegexMatcher extends Object implements ValueConverter<string> {
    static regex(paramarg0: string): ValueConverter<string>;
    constructor(arg0: string, arg1: number)
    // private pattern: Pattern;
    convert(arg0: string): string;
    // private raiseValueConversionFailure(arg0: string): void;
    valuePattern(): string;
    valueType(): Class<string>;
}