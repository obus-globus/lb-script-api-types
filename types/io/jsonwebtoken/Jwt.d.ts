import type { JwtVisitor } from '../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Jwt<H extends Header, P extends Object | number | string | boolean> extends Object{
    accept<T extends Object | number | string | boolean>(arg0: JwtVisitor<T>): T;
    getBody(): P;
    getHeader(): H;
    getPayload(): P;
}