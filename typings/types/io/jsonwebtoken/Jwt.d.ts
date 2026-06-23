import type { JwtVisitor } from '../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Jwt<H extends { [key: string]: any }, P extends unknown> extends Object{
    accept<T extends unknown>(arg0: JwtVisitor<T>): T;
    getBody(): P;
    getHeader(): H;
    getPayload(): P;
}