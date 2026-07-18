import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { Headers$Companion } from '../../../../io/ktor/http/Headers$Companion.d.ts'
import type { HttpRequest } from '../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class NettyApplicationRequestHeaders extends Object implements Headers {
    static Companion: Headers$Companion;
    constructor(request: HttpRequest)
    readonly caseInsensitiveName: boolean;
    // private headers: Map$Entry<string, string>[];
    contains(name: string): boolean;
    contains(name: string, value: string): boolean;
    entries(): Map$Entry<string, string[]>[];
    forEach(body: (param0: string, param1: string[]) => void): void;
    get(name: string): string | null;
    getAll(name: string): string[] | null;
    isEmpty(): boolean;
    names(): string[];
}