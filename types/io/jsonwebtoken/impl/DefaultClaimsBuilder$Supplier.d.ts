import type { ClaimsBuilder } from '../../../io/jsonwebtoken/ClaimsBuilder.d.ts'
import type { Supplier } from '../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultClaimsBuilder$Supplier extends Object implements Supplier<ClaimsBuilder> {
    constructor()
    get(): ClaimsBuilder;
}