import type { JavaMap } from '../../JavaMap.d.ts'
import type { JwtVisitor } from '../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Jwt<H extends JavaMap<any, any>, P extends unknown> extends Object{
    accept<T extends unknown>(arg0: JwtVisitor<T>): T;
    getBody(): P;
    getHeader(): H;
    getPayload(): P;
}