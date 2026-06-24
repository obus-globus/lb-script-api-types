import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Headers$Builder } from '../../okhttp3/Headers$Builder.d.ts'
export class _HeadersCommonKt extends Object {
    static HEADER_LIMIT: number;
    static commonAdd(paramarg0: Headers$Builder, paramarg1: string, paramarg2: string): Headers$Builder;
    static commonAddAll(paramarg0: Headers$Builder, paramarg1: Pair<string, string>[]): Headers$Builder;
    static commonAddLenient(paramarg0: Headers$Builder, paramarg1: string, paramarg2: string): Headers$Builder;
    static commonBuild(paramarg0: Headers$Builder): Pair<string, string>[];
    static commonEquals(paramarg0: Pair<string, string>[], paramarg1: Object): boolean;
    static commonGet(paramarg0: Headers$Builder, paramarg1: string): string;
    static commonHashCode(paramarg0: Pair<string, string>[]): number;
    static commonHeadersGet(paramarg0: (Object | null)[], paramarg1: string): string;
    static commonHeadersOf(paramarg0: (Object | null)[]): Pair<string, string>[];
    static commonIterator(paramarg0: Pair<string, string>[]): Iterator<Pair<string, string>>;
    static commonName(paramarg0: Pair<string, string>[], paramarg1: number): string;
    static commonNewBuilder(paramarg0: Pair<string, string>[]): Headers$Builder;
    static commonRemoveAll(paramarg0: Headers$Builder, paramarg1: string): Headers$Builder;
    static commonSet(paramarg0: Headers$Builder, paramarg1: string, paramarg2: string): Headers$Builder;
    static commonToHeaders(paramarg0: { [key: string]: string }): Pair<string, string>[];
    static commonToString(paramarg0: Pair<string, string>[]): string;
    static commonValue(paramarg0: Pair<string, string>[], paramarg1: number): string;
    static commonValues(paramarg0: Pair<string, string>[], paramarg1: string): string[];
    static headersCheckName(paramarg0: string): void;
    static headersCheckValue(paramarg0: string, paramarg1: string): void;
}