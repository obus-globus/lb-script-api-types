import type { AbstractJwkParserBuilder } from '../../../../io/jsonwebtoken/impl/security/AbstractJwkParserBuilder.d.ts'
import type { Parser } from '../../../../io/jsonwebtoken/io/Parser.d.ts'
import type { JwkParserBuilder } from '../../../../io/jsonwebtoken/security/JwkParserBuilder.d.ts'
export class DefaultJwkParserBuilder extends AbstractJwkParserBuilder<{ [key: string]: any }, JwkParserBuilder> implements JwkParserBuilder {
    constructor()
    doBuild(): Parser<{ [key: string]: any }>;
}