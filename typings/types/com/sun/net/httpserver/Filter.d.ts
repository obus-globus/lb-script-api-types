import type { Filter$Chain } from '../../../../com/sun/net/httpserver/Filter$Chain.d.ts'
import type { HttpExchange } from '../../../../com/sun/net/httpserver/HttpExchange.d.ts'
import type { Request } from '../../../../com/sun/net/httpserver/Request.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Filter extends Object {
    static adaptRequest(paramarg0: string, paramarg1: (param0: Request) => unknown): Filter;
    static afterHandler(paramarg0: string, paramarg1: (param0: HttpExchange) => void): Filter;
    static beforeHandler(paramarg0: string, paramarg1: (param0: HttpExchange) => void): Filter;
    constructor()
    description(): string;
    doFilter(arg0: HttpExchange, arg1: Filter$Chain): void;
}