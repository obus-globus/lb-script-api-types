import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ParserBuilder } from '../../../io/jsonwebtoken/io/ParserBuilder.d.ts'
import type { KeyOperationPolicied } from '../../../io/jsonwebtoken/security/KeyOperationPolicied.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JwkSetParserBuilder extends ParserBuilder<JavaMap<any, any>[], JwkSetParserBuilder>, KeyOperationPolicied<JwkSetParserBuilder>, Object{
    ignoreUnsupported(arg0: boolean): JwkSetParserBuilder;
}