import type { JwtBuilder } from '../../../io/jsonwebtoken/JwtBuilder.d.ts'
import type { Supplier } from '../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultJwtBuilder$Supplier extends Object implements Supplier<JwtBuilder> {
    constructor()
    get(): JwtBuilder;
}