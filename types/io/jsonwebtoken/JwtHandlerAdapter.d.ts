import type { Jwe } from '../../io/jsonwebtoken/Jwe.d.ts'
import type { Jws } from '../../io/jsonwebtoken/Jws.d.ts'
import type { Jwt } from '../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtHandler } from '../../io/jsonwebtoken/JwtHandler.d.ts'
import type { SupportedJwtVisitor } from '../../io/jsonwebtoken/SupportedJwtVisitor.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class JwtHandlerAdapter<T extends Object | number | string | boolean> extends SupportedJwtVisitor<T> implements JwtHandler<T> {
    constructor()
    onClaimsJwe(arg0: Jwe<Claims>): T;
    onClaimsJws(arg0: Jws<Claims>): T;
    onClaimsJwt(arg0: Jwt<Header, Claims>): T;
    onContentJwe(arg0: Jwe<number[]>): T;
    onContentJws(arg0: Jws<number[]>): T;
    onContentJwt(arg0: Jwt<Header, number[]>): T;
    onDecryptedClaims(arg0: Jwe<Claims>): T;
    onDecryptedContent(arg0: Jwe<number[]>): T;
    onUnsecuredClaims(arg0: Jwt<Header, Claims>): T;
    onUnsecuredContent(arg0: Jwt<Header, number[]>): T;
    onVerifiedClaims(arg0: Jws<Claims>): T;
    onVerifiedContent(arg0: Jws<number[]>): T;
}