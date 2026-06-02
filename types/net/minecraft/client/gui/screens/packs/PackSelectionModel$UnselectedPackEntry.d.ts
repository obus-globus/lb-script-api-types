import type { PackSelectionModel$EntryBase } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel$EntryBase.d.ts'
import type { Pack } from '../../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
export class PackSelectionModel$UnselectedPackEntry extends PackSelectionModel$EntryBase {
    constructor(null_: PackSelectionModel$UnselectedPackEntry, pack: Pack)
    getOtherList(): Pack[];
    getSelfList(): Pack[];
    isSelected(): boolean;
    select(): void;
    unselect(): void;
}