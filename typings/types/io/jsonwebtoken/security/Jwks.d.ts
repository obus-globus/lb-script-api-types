import type { DynamicJwkBuilder } from '../../../io/jsonwebtoken/security/DynamicJwkBuilder.d.ts'
import type { JwkParserBuilder } from '../../../io/jsonwebtoken/security/JwkParserBuilder.d.ts'
import type { JwkSetBuilder } from '../../../io/jsonwebtoken/security/JwkSetBuilder.d.ts'
import type { JwkSetParserBuilder } from '../../../io/jsonwebtoken/security/JwkSetParserBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Jwks extends Object {
    static UNSAFE_JSON(paramarg0: Jwk<Object>): string;
    static builder(): DynamicJwkBuilder<Object, Object>;
    static json(paramarg0: PublicJwk<Object>): string;
    static parser(): JwkParserBuilder;
    static set(): JwkSetBuilder;
    static setParser(): JwkSetParserBuilder;
    private constructor()
}