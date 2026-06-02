import type { AbstractJwkParserBuilder } from '../../../../io/jsonwebtoken/impl/security/AbstractJwkParserBuilder.d.ts'
import type { Parser } from '../../../../io/jsonwebtoken/io/Parser.d.ts'
import type { JwkParserBuilder } from '../../../../io/jsonwebtoken/security/JwkParserBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultJwkParserBuilder extends AbstractJwkParserBuilder<Jwk<Object>, JwkParserBuilder> implements JwkParserBuilder {
    constructor()
    doBuild(): Parser<Jwk<Object>>;
}