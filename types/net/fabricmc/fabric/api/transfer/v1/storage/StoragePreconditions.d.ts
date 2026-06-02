import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransferVariant } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/TransferVariant.d.ts'
export class StoragePreconditions extends Object {
    static notBlank(paramarg0: TransferVariant<Object>): void;
    static notBlankNotNegative(paramarg0: TransferVariant<Object>, paramarg1: number): void;
    static notNegative(paramarg0: number): void;
    private constructor()
}