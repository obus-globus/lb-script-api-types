import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TransferVariant } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/TransferVariant.d.ts'
import type { ValueInput } from '../../../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class SingleVariantStorage<T extends TransferVariant<Object>> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static readValue<T extends TransferVariant<Object>>(paramarg0: T[], paramarg1: Codec<T>, paramarg2: () => T, paramarg3: ValueInput): void;
    static writeValue<T extends TransferVariant<Object>>(paramarg0: T[], paramarg1: Codec<T>, paramarg2: ValueOutput): void;
}