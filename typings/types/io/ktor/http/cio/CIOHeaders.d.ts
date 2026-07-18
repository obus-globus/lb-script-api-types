import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { Headers$Companion } from '../../../../io/ktor/http/Headers$Companion.d.ts'
import type { HttpHeadersMap } from '../../../../io/ktor/http/cio/HttpHeadersMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class CIOHeaders extends Object implements Headers {
    static Companion: Headers$Companion;
    constructor(headers: HttpHeadersMap)
    readonly caseInsensitiveName: boolean;
    // private headers: HttpHeadersMap;
    // private names: string[];
    // private /*not mapped: */ getNames(): string[];
    entries(): Map$Entry<string, string[]>[];
    get(name: string): string | null;
    getAll(name: string): string[] | null;
    isEmpty(): boolean;
    names(): string[];
}