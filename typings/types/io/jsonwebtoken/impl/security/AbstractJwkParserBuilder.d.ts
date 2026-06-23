import type { AbstractParserBuilder } from '../../../../io/jsonwebtoken/impl/io/AbstractParserBuilder.d.ts'
import type { ParserBuilder } from '../../../../io/jsonwebtoken/io/ParserBuilder.d.ts'
import type { KeyOperationPolicied } from '../../../../io/jsonwebtoken/security/KeyOperationPolicied.d.ts'
import type { KeyOperationPolicy } from '../../../../io/jsonwebtoken/security/KeyOperationPolicy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractJwkParserBuilder<T extends unknown, B extends ParserBuilder<T, B> & KeyOperationPolicied<B>> extends AbstractParserBuilder<T, B> implements KeyOperationPolicied<B> {
    constructor()
    // private operationPolicy: KeyOperationPolicy;
    operationPolicy(arg0: KeyOperationPolicy): B;
}