import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HttpHeader } from '../../../../net/lenni0451/commons/httpclient/model/HttpHeader.d.ts'
export abstract class HeaderStore<T extends HeaderStore<T>> extends Object {
    constructor()
    constructor(arg0: JavaMap<string, string[]>)
    readonly headers: JavaMap<string, string[]>;
    appendHeader(...arg0: HttpHeader[]): T;
    appendHeader(arg0: string, arg1: string): T;
    appendHeader(arg0: HttpHeader[]): T;
    clearHeaders(): T;
    forEachHeader(arg0: (param0: string, param1: string) => void): T;
    getFirstHeader(arg0: string): Optional<string>;
    getHeader(arg0: string): string[];
    getHeaders(): JavaMap<string, string[]>;
    getLastHeader(arg0: string): Optional<string>;
    hasHeader(arg0: string): boolean;
    hasHeader(arg0: string, arg1: string): boolean;
    hasHeader(arg0: HttpHeader): boolean;
    removeHeader(arg0: string): T;
    setHeader(...arg0: HttpHeader[]): T;
    setHeader(arg0: string, arg1: string): T;
    setHeader(arg0: HttpHeader[]): T;
}