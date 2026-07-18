import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { RegexOptions } from '../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { Encodings$Encoding } from '../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { JsonConvertible } from '../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexSource extends Object implements JsonConvertible {
    constructor(pattern: string, flags: string, options: RegexOptions, source: Source)
    // private cachedHash: number;
    readonly flags: string;
    // private hashComputed: boolean;
    readonly options: RegexOptions;
    readonly pattern: string;
    readonly source: Source;
    equals(obj: Object | null): boolean;
    getEncoding(): Encodings$Encoding;
    getFlags(): string;
    getOptions(): RegexOptions;
    getPattern(): string;
    getSource(): Source;
    hashCode(): number;
    toFileName(): string;
    toJson(): JsonValue;
    toString(): string;
    toStringEscaped(): string;
    withBooleanMatch(): RegexSource;
    withoutBooleanMatch(): RegexSource;
}