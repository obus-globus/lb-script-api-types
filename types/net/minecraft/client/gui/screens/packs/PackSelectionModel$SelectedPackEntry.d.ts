import type { PackSelectionModel$EntryBase } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel$EntryBase.d.ts'
import type { Pack } from '../../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
export class PackSelectionModel$SelectedPackEntry extends PackSelectionModel$EntryBase {
    constructor(null_: PackSelectionModel$SelectedPackEntry, pack: Pack)
    getOtherList(): Pack[];
    getSelfList(): Pack[];
    isSelected(): boolean;
    select(): void;
    unselect(): void;
}