import type { Jwt } from '../../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtVisitor } from '../../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { ProtectedJwt } from '../../../io/jsonwebtoken/ProtectedJwt.d.ts'
import type { DefaultJwt } from '../../../io/jsonwebtoken/impl/DefaultJwt.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class DefaultProtectedJwt<H extends { [key: string]: any }, P extends Object | number | string | boolean> extends DefaultJwt<H, P> implements ProtectedJwt<H, P> {
    static UNSECURED_CLAIMS: JwtVisitor<Jwt<{ [key: string]: any }, { [key: string]: any }>>;
    static UNSECURED_CONTENT: JwtVisitor<Jwt<{ [key: string]: any }, number[]>>;
    constructor(arg0: H, arg1: P, arg2: number[], arg3: string)
    readonly digest: number[];
    // private digestName: string;
    equals(arg0: Object | null): boolean;
    getDigest(): number[];
    hashCode(): number;
    toStringBuilder(): StringBuilder;
}