import type { Jwe } from '../../io/jsonwebtoken/Jwe.d.ts'
import type { Jws } from '../../io/jsonwebtoken/Jws.d.ts'
import type { Jwt } from '../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtVisitor } from '../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SupportedJwtVisitor<T extends unknown> extends Object implements JwtVisitor<T> {
    constructor()
    onDecryptedClaims(arg0: Jwe<{ [key: string]: any }>): T;
    onDecryptedContent(arg0: Jwe<number[]>): T;
    onUnsecuredClaims(arg0: Jwt<{ [key: string]: any }, { [key: string]: any }>): T;
    onUnsecuredContent(arg0: Jwt<{ [key: string]: any }, number[]>): T;
    onVerifiedClaims(arg0: Jws<{ [key: string]: any }>): T;
    onVerifiedContent(arg0: Jws<number[]>): T;
    visit(arg0: Jwe<Object>): T;
    visit(arg0: Jws<Object>): T;
    visit(arg0: Jwt<any, Object>): T;
}