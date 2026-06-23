import type { Jws } from '../../../io/jsonwebtoken/Jws.d.ts'
import type { Jwt } from '../../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtVisitor } from '../../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { DefaultProtectedJwt } from '../../../io/jsonwebtoken/impl/DefaultProtectedJwt.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultJws<P extends unknown> extends DefaultProtectedJwt<{ [key: string]: any }, P> implements Jws<P> {
    static CLAIMS: JwtVisitor<Jws<{ [key: string]: any }>>;
    static CONTENT: JwtVisitor<Jws<number[]>>;
    static UNSECURED_CLAIMS: JwtVisitor<Jwt<{ [key: string]: any }, { [key: string]: any }>>;
    static UNSECURED_CONTENT: JwtVisitor<Jwt<{ [key: string]: any }, number[]>>;
    constructor(arg0: { [key: string]: any }, arg1: P, arg2: number[], arg3: string)
    readonly signature: string;
    accept<T extends unknown>(arg0: JwtVisitor<T>): T;
    getSignature(): string;
}