import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { KeyOperationBuilder } from '../../../../io/jsonwebtoken/security/KeyOperationBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultKeyOperationBuilder$Supplier extends Object implements Supplier<KeyOperationBuilder> {
    constructor()
    get(): KeyOperationBuilder;
}