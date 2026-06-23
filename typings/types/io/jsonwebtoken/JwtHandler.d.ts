import type { Jwe } from '../../io/jsonwebtoken/Jwe.d.ts'
import type { Jws } from '../../io/jsonwebtoken/Jws.d.ts'
import type { Jwt } from '../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtVisitor } from '../../io/jsonwebtoken/JwtVisitor.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JwtHandler<T extends unknown> extends JwtVisitor<T>, Object{
    onClaimsJwe(arg0: Jwe<{ [key: string]: any }>): T;
    onClaimsJws(arg0: Jws<{ [key: string]: any }>): T;
    onClaimsJwt(arg0: Jwt<{ [key: string]: any }, { [key: string]: any }>): T;
    onContentJwe(arg0: Jwe<number[]>): T;
    onContentJws(arg0: Jws<number[]>): T;
    onContentJwt(arg0: Jwt<{ [key: string]: any }, number[]>): T;
}