import type { Jwe } from '../../../io/jsonwebtoken/Jwe.d.ts'
import type { Jwt } from '../../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtVisitor } from '../../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { DefaultProtectedJwt } from '../../../io/jsonwebtoken/impl/DefaultProtectedJwt.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultJwe<P extends Object | number | string | boolean> extends DefaultProtectedJwt<JweHeader, P> implements Jwe<P> {
    static CLAIMS: JwtVisitor<Jwe<Claims>>;
    static CONTENT: JwtVisitor<Jwe<number[]>>;
    static UNSECURED_CLAIMS: JwtVisitor<Jwt<Header, Claims>>;
    static UNSECURED_CONTENT: JwtVisitor<Jwt<Header, number[]>>;
    constructor(arg0: JweHeader, arg1: P, arg2: number[], arg3: number[])
    // private iv: number[];
    accept<T extends Object | number | string | boolean>(arg0: JwtVisitor<T>): T;
    equals(arg0: Object | null): boolean;
    getInitializationVector(): number[];
    hashCode(): number;
    toStringBuilder(): StringBuilder;
}