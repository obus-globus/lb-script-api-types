import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Jws } from '../../../io/jsonwebtoken/Jws.d.ts'
import type { Jwt } from '../../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtVisitor } from '../../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { DefaultProtectedJwt } from '../../../io/jsonwebtoken/impl/DefaultProtectedJwt.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultJws<P extends unknown> extends DefaultProtectedJwt<JavaMap<any, any>, P> implements Jws<P> {
    static CLAIMS: JwtVisitor<Jws<JavaMap<any, any>>>;
    static CONTENT: JwtVisitor<Jws<number[]>>;
    static UNSECURED_CLAIMS: JwtVisitor<Jwt<JavaMap<any, any>, JavaMap<any, any>>>;
    static UNSECURED_CONTENT: JwtVisitor<Jwt<JavaMap<any, any>, number[]>>;
    constructor(arg0: JavaMap<any, any>, arg1: P, arg2: number[], arg3: string)
    readonly signature: string;
    accept<T extends unknown>(arg0: JwtVisitor<T>): T;
    getSignature(): string;
}