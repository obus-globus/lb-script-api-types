import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractJwkParserBuilder } from '../../../../io/jsonwebtoken/impl/security/AbstractJwkParserBuilder.d.ts'
import type { Parser } from '../../../../io/jsonwebtoken/io/Parser.d.ts'
import type { JwkSetParserBuilder } from '../../../../io/jsonwebtoken/security/JwkSetParserBuilder.d.ts'
export class DefaultJwkSetParserBuilder extends AbstractJwkParserBuilder<JavaMap<any, any>[], JwkSetParserBuilder> implements JwkSetParserBuilder {
    constructor()
    // private ignoreUnsupported: boolean;
    doBuild(): Parser<JavaMap<any, any>[]>;
    ignoreUnsupported(arg0: boolean): JwkSetParserBuilder;
}