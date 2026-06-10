import type { Jws } from '../../../io/jsonwebtoken/Jws.d.ts'
import type { Jwt } from '../../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtVisitor } from '../../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { DefaultProtectedJwt } from '../../../io/jsonwebtoken/impl/DefaultProtectedJwt.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultJws<P extends Object | number | string | boolean> extends DefaultProtectedJwt<JwsHeader, P> implements Jws<P> {
    static CLAIMS: JwtVisitor<Jws<Claims>>;
    static CONTENT: JwtVisitor<Jws<number[]>>;
    static UNSECURED_CLAIMS: JwtVisitor<Jwt<Header, Claims>>;
    static UNSECURED_CONTENT: JwtVisitor<Jwt<Header, number[]>>;
    constructor(arg0: JwsHeader, arg1: P, arg2: number[], arg3: string)
    readonly signature: string;
    accept<T extends Object | number | string | boolean>(arg0: JwtVisitor<T>): T;
    getSignature(): string;
}