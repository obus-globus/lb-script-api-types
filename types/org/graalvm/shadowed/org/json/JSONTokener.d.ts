import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { JSONException } from '../../../../../org/graalvm/shadowed/org/json/JSONException.d.ts'
import type { JSONParserConfiguration } from '../../../../../org/graalvm/shadowed/org/json/JSONParserConfiguration.d.ts'
export class JSONTokener extends Object {
    static dehexchar(paramc: string): number;
    constructor(inputStream: InputStream)
    constructor(inputStream: InputStream, jsonParserConfiguration: JSONParserConfiguration)
    constructor(reader: Reader)
    constructor(reader: Reader, jsonParserConfiguration: JSONParserConfiguration)
    constructor(source: string)
    constructor(source: string, jsonParserConfiguration: JSONParserConfiguration)
    // private character: number;
    // private characterPreviousLine: number;
    // private eof: boolean;
    // private index: number;
    readonly jsonParserConfiguration: JSONParserConfiguration;
    // private line: number;
    // private previous: string;
    // private reader: Reader;
    // private usePrevious: boolean;
    back(): void;
    close(): void;
    // private decrementIndexes(): void;
    end(): boolean;
    getJsonParserConfiguration(): JSONParserConfiguration;
    getPrevious(): string;
    // private incrementIndexes(c: number): void;
    more(): boolean;
    next(): string;
    next(c: string): string;
    next(n: number): string;
    nextClean(): string;
    nextSimpleValue(c: string): Object;
    nextString(quote: string): string;
    nextTo(delimiter: string): string;
    nextTo(delimiters: string): string;
    nextValue(): Object;
    setJsonParserConfiguration(jsonParserConfiguration: JSONParserConfiguration): void;
    skipTo(to: string): string;
    syntaxError(message: string): JSONException;
    syntaxError(message: string, causedBy: Throwable): JSONException;
    toString(): string;
}