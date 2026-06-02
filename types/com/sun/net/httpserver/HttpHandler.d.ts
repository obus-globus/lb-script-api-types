import type { HttpExchange } from '../../../../com/sun/net/httpserver/HttpExchange.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface HttpHandler extends Object{
    handle(arg0: HttpExchange): void;
}