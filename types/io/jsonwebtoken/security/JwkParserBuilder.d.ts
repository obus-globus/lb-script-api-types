import type { ParserBuilder } from '../../../io/jsonwebtoken/io/ParserBuilder.d.ts'
import type { KeyOperationPolicied } from '../../../io/jsonwebtoken/security/KeyOperationPolicied.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JwkParserBuilder extends ParserBuilder<Jwk<Object>, JwkParserBuilder>, KeyOperationPolicied<JwkParserBuilder>, Object{
}