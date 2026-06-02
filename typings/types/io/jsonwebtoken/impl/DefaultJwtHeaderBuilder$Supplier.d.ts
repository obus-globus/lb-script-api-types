import type { Jwts$HeaderBuilder } from '../../../io/jsonwebtoken/Jwts$HeaderBuilder.d.ts'
import type { Supplier } from '../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultJwtHeaderBuilder$Supplier extends Object implements Supplier<Jwts$HeaderBuilder> {
    constructor()
    get(): Jwts$HeaderBuilder;
}