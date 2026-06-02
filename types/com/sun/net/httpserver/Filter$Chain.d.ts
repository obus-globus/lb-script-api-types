import type { Filter } from '../../../../com/sun/net/httpserver/Filter.d.ts'
import type { HttpExchange } from '../../../../com/sun/net/httpserver/HttpExchange.d.ts'
import type { HttpHandler } from '../../../../com/sun/net/httpserver/HttpHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../java/util/ListIterator.d.ts'
export class Filter$Chain extends Object {
    constructor(arg0: Filter[], arg1: HttpHandler)
    // private handler: HttpHandler;
    // private iter: ListIterator<Filter>;
    doFilter(arg0: HttpExchange): void;
}