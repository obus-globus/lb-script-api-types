import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HttpHeader } from '../../../../net/lenni0451/commons/httpclient/model/HttpHeader.d.ts'
export abstract class HeaderStore<T extends HeaderStore<T>> extends Object {
    constructor()
    constructor(arg0: { [key: string]: string[] })
    readonly headers: { [key: string]: string[] };
    appendHeader(arg0: HttpHeader[]): T;
    appendHeader(arg0: string, arg1: string): T;
    appendHeader(arg0: E[]): T;
    clearHeaders(): T;
    forEachHeader(arg0: (param0: string, param1: string) => void): T;
    getFirstHeader(arg0: string): Optional<string>;
    getHeader(arg0: string): string[];
    getHeaders(): { [key: string]: string[] };
    getLastHeader(arg0: string): Optional<string>;
    hasHeader(arg0: string): boolean;
    hasHeader(arg0: string, arg1: string): boolean;
    hasHeader(arg0: HttpHeader): boolean;
    removeHeader(arg0: string): T;
    setHeader(arg0: HttpHeader[]): T;
    setHeader(arg0: string, arg1: string): T;
    setHeader(arg0: E[]): T;
}