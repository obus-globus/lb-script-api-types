import type { Headers } from '../../../io/ktor/http/Headers.d.ts'
import type { HeadersBuilder } from '../../../io/ktor/http/HeadersBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
export class HeadersKt extends Object {
    static getSplitValues(self: Headers, name: string, separator: string, splitInsideQuotes: boolean): string[] | null;
    static headers(builder: (param0: HeadersBuilder) => void): Headers;
    static headersOf(): Headers;
    static headersOf(name: string, value: string): Headers;
    static headersOf(name: string, values: string[]): Headers;
    static headersOf(...pairs: Pair<string, string[]>[]): Headers;
}