import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { Headers$Companion } from '../../../../io/ktor/http/Headers$Companion.d.ts'
import type { HeadersBuilder } from '../../../../io/ktor/http/HeadersBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class DelegateHeaders extends Object implements Headers {
    static Companion: Headers$Companion;
    constructor(original: Headers)
    readonly caseInsensitiveName: boolean;
    // private original: Headers;
    // private overridden: HeadersBuilder;
    // private removed: string[];
    entries(): Map$Entry<string, string[]>[];
    getAll(name: string): string[] | null;
    isEmpty(): boolean;
    names(): string[];
    setHeader(name: string, values: string[] | null): void;
}