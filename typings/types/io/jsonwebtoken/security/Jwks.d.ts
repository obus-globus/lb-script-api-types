import type { JavaMap } from '../../../JavaMap.d.ts'
import type { DynamicJwkBuilder } from '../../../io/jsonwebtoken/security/DynamicJwkBuilder.d.ts'
import type { JwkParserBuilder } from '../../../io/jsonwebtoken/security/JwkParserBuilder.d.ts'
import type { JwkSetBuilder } from '../../../io/jsonwebtoken/security/JwkSetBuilder.d.ts'
import type { JwkSetParserBuilder } from '../../../io/jsonwebtoken/security/JwkSetParserBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Jwks extends Object {
    static UNSAFE_JSON(paramarg0: JavaMap<any, any>): string;
    static builder(): DynamicJwkBuilder<any, any>;
    static json(paramarg0: JavaMap<any, any>): string;
    static parser(): JwkParserBuilder;
    static set(): JwkSetBuilder;
    static setParser(): JwkSetParserBuilder;
    private constructor()
}