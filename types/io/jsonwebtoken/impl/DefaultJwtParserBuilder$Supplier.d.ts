import type { JwtParserBuilder } from '../../../io/jsonwebtoken/JwtParserBuilder.d.ts'
import type { Supplier } from '../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultJwtParserBuilder$Supplier extends Object implements Supplier<JwtParserBuilder> {
    constructor()
    get(): JwtParserBuilder;
}