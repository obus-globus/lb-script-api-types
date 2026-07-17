import type { JavaMap } from '../../JavaMap.d.ts'
import type { ClaimsBuilder } from '../../io/jsonwebtoken/ClaimsBuilder.d.ts'
import type { JwtBuilder } from '../../io/jsonwebtoken/JwtBuilder.d.ts'
import type { JwtParserBuilder } from '../../io/jsonwebtoken/JwtParserBuilder.d.ts'
import type { Jwts$HeaderBuilder } from '../../io/jsonwebtoken/Jwts$HeaderBuilder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Jwts extends Object {
    static builder(): JwtBuilder;
    static claims(paramarg0: JavaMap<string, Object>): JavaMap<any, any>;
    static claims(): ClaimsBuilder;
    static header(): Jwts$HeaderBuilder;
    static parser(): JwtParserBuilder;
    private constructor()
}