import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemVariant } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
export class PlayerInventoryStorage {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static getCursorStorage(paramarg0: AbstractContainerMenu): ItemVariant[];
    static of(paramarg0: (Object | null)[]): (Object | null)[];
    static of(paramarg0: Player): (Object | null)[];
}