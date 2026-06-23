import type { Jwt } from '../../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtVisitor } from '../../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultJwt<H extends { [key: string]: any }, P extends unknown> extends Object implements Jwt<H, P> {
    static UNSECURED_CLAIMS: JwtVisitor<Jwt<{ [key: string]: any }, { [key: string]: any }>>;
    static UNSECURED_CONTENT: JwtVisitor<Jwt<{ [key: string]: any }, number[]>>;
    constructor(arg0: H, arg1: P)
    readonly header: H;
    readonly payload: P;
    accept<T extends unknown>(arg0: JwtVisitor<T>): T;
    equals(arg0: Object | null): boolean;
    getBody(): P;
    getHeader(): H;
    getPayload(): P;
    hashCode(): number;
    toString(): string;
    toStringBuilder(): StringBuilder;
}