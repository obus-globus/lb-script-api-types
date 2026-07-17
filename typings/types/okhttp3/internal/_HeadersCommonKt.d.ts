import type { JavaMap } from '../../JavaMap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Headers$Builder } from '../../okhttp3/Headers$Builder.d.ts'
export class _HeadersCommonKt extends Object {
    static HEADER_LIMIT: number;
    static commonAdd(self: Headers$Builder, name: string, value: string): Headers$Builder;
    static commonAddAll(self: Headers$Builder, headers: Pair<string, string>[]): Headers$Builder;
    static commonAddLenient(self: Headers$Builder, name: string, value: string): Headers$Builder;
    static commonBuild(self: Headers$Builder): Pair<string, string>[];
    static commonEquals(self: Pair<string, string>[], other: Object | null): boolean;
    static commonGet(self: Headers$Builder, name: string): string | null;
    static commonHashCode(self: Pair<string, string>[]): number;
    static commonHeadersGet(namesAndValues: string[], name: string): string | null;
    static commonHeadersOf(...inputNamesAndValues: string[]): Pair<string, string>[];
    static commonIterator(self: Pair<string, string>[]): Iterator<Pair<string, string>>;
    static commonName(self: Pair<string, string>[], index: number): string;
    static commonNewBuilder(self: Pair<string, string>[]): Headers$Builder;
    static commonRemoveAll(self: Headers$Builder, name: string): Headers$Builder;
    static commonSet(self: Headers$Builder, name: string, value: string): Headers$Builder;
    static commonToHeaders(self: JavaMap<string, string>): Pair<string, string>[];
    static commonToString(self: Pair<string, string>[]): string;
    static commonValue(self: Pair<string, string>[], index: number): string;
    static commonValues(self: Pair<string, string>[], name: string): string[];
    static headersCheckName(name: string): void;
    static headersCheckValue(value: string, name: string): void;
}