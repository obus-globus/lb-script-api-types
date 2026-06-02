import type { KeyOperation } from '../../../../io/jsonwebtoken/security/KeyOperation.d.ts'
import type { KeyOperationBuilder } from '../../../../io/jsonwebtoken/security/KeyOperationBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultKeyOperationBuilder extends Object implements KeyOperationBuilder {
    constructor()
    // private description: string;
    // private id: string;
    // private related: string[];
    build(): KeyOperation;
    description(arg0: string): KeyOperationBuilder;
    id(arg0: string): KeyOperationBuilder;
    related(arg0: string): KeyOperationBuilder;
}