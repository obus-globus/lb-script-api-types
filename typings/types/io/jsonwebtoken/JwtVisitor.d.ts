import type { Jwe } from '../../io/jsonwebtoken/Jwe.d.ts'
import type { Jws } from '../../io/jsonwebtoken/Jws.d.ts'
import type { Jwt } from '../../io/jsonwebtoken/Jwt.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JwtVisitor<T extends unknown> extends Object{
    visit(arg0: Jwe<Object>): T;
    visit(arg0: Jws<Object>): T;
    visit(arg0: Jwt<any, Object>): T;
}