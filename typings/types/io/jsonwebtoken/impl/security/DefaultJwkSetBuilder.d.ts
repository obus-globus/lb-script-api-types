import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractSecurityBuilder } from '../../../../io/jsonwebtoken/impl/security/AbstractSecurityBuilder.d.ts'
import type { JwkSetConverter } from '../../../../io/jsonwebtoken/impl/security/JwkSetConverter.d.ts'
import type { JwkSetBuilder } from '../../../../io/jsonwebtoken/security/JwkSetBuilder.d.ts'
import type { KeyOperationPolicy } from '../../../../io/jsonwebtoken/security/KeyOperationPolicy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultJwkSetBuilder extends AbstractSecurityBuilder<JavaMap<any, any>[], JwkSetBuilder> implements JwkSetBuilder {
    constructor()
    // private converter: JwkSetConverter;
    // private map: JavaMap<any, any>;
    // private operationPolicy: KeyOperationPolicy;
    add(arg0: JavaMap<any, any>): JwkSetBuilder;
    add(arg0: string, arg1: Object): JwkSetBuilder;
    add(arg0: JavaMap<any, any>[]): JwkSetBuilder;
    add(arg0: JavaMap<string, Object | null>): JwkSetBuilder;
    build(): JavaMap<any, any>[];
    delete(arg0: string): JwkSetBuilder;
    empty(): JwkSetBuilder;
    ensureKeys(): JavaMap<any, any>[];
    keys(arg0: JavaMap<any, any>[]): JwkSetBuilder;
    operationPolicy(arg0: KeyOperationPolicy): JwkSetBuilder;
    provider(arg0: JavaMap<any, any>): JwkSetBuilder;
    // private refresh(): JwkSetBuilder;
}