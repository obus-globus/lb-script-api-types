import type { AbstractJwkParserBuilder } from '../../../../io/jsonwebtoken/impl/security/AbstractJwkParserBuilder.d.ts'
import type { Parser } from '../../../../io/jsonwebtoken/io/Parser.d.ts'
import type { JwkSetParserBuilder } from '../../../../io/jsonwebtoken/security/JwkSetParserBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultJwkSetParserBuilder extends AbstractJwkParserBuilder<Jwk<Object>[], JwkSetParserBuilder> implements JwkSetParserBuilder {
    constructor()
    // private ignoreUnsupported: boolean;
    doBuild(): Parser<Jwk<Object>[]>;
    ignoreUnsupported(arg0: boolean): JwkSetParserBuilder;
}