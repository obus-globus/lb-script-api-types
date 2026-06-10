import type { AbstractSecurityBuilder } from '../../../../io/jsonwebtoken/impl/security/AbstractSecurityBuilder.d.ts'
import type { JwkSetConverter } from '../../../../io/jsonwebtoken/impl/security/JwkSetConverter.d.ts'
import type { JwkSetBuilder } from '../../../../io/jsonwebtoken/security/JwkSetBuilder.d.ts'
import type { KeyOperationPolicy } from '../../../../io/jsonwebtoken/security/KeyOperationPolicy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultJwkSetBuilder extends AbstractSecurityBuilder<Jwk<Object>[], JwkSetBuilder> implements JwkSetBuilder {
    constructor()
    // private converter: JwkSetConverter;
    // private map: ParameterMap;
    // private operationPolicy: KeyOperationPolicy;
    add(arg0: Jwk<Object>): JwkSetBuilder;
    add(arg0: string, arg1: Object): JwkSetBuilder;
    add(arg0: Jwk<Object>[]): JwkSetBuilder;
    add(arg0: { [key: string]: Object | null }): JwkSetBuilder;
    build(): Jwk<Object>[];
    delete(arg0: string): JwkSetBuilder;
    empty(): JwkSetBuilder;
    ensureKeys(): Jwk<Object>[];
    keys(arg0: Jwk<Object>[]): JwkSetBuilder;
    operationPolicy(arg0: KeyOperationPolicy): JwkSetBuilder;
    provider(arg0: Provider): JwkSetBuilder;
    // private refresh(): JwkSetBuilder;
}