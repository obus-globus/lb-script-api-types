import type { Jwt } from '../../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtVisitor } from '../../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultJwt<H extends Header, P extends Object | number | string | boolean> extends Object implements Jwt<H, P> {
    static UNSECURED_CLAIMS: JwtVisitor<Jwt<Header, Claims>>;
    static UNSECURED_CONTENT: JwtVisitor<Jwt<Header, number[]>>;
    constructor(arg0: H, arg1: P)
    readonly header: H;
    readonly payload: P;
    accept<T extends Object | number | string | boolean>(arg0: JwtVisitor<T>): T;
    equals(arg0: Object | null): boolean;
    getBody(): P;
    getHeader(): H;
    getPayload(): P;
    hashCode(): number;
    toString(): string;
    toStringBuilder(): StringBuilder;
}