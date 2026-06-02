import type { Builder } from '../../../io/jsonwebtoken/lang/Builder.d.ts'
import type { KeyOperation } from '../../../io/jsonwebtoken/security/KeyOperation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyOperationBuilder extends Builder<KeyOperation>, Object{
    description(arg0: string): KeyOperationBuilder;
    id(arg0: string): KeyOperationBuilder;
    related(arg0: string): KeyOperationBuilder;
}