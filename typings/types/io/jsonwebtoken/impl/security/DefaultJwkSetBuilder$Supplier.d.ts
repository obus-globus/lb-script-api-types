import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { JwkSetBuilder } from '../../../../io/jsonwebtoken/security/JwkSetBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultJwkSetBuilder$Supplier extends Object implements Supplier<JwkSetBuilder> {
    constructor()
    get(): JwkSetBuilder;
}