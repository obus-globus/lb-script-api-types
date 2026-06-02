import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PackSelectionModel$Entry } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel$Entry.d.ts'
import type { PackSelectionModel$EntryBase } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel$EntryBase.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Pack } from '../../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { PackRepository } from '../../../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
export class PackSelectionModel extends Object {
    constructor(onListChanged: (param0: PackSelectionModel$EntryBase) => void, iconGetter: (param0: Pack) => Identifier, repository: PackRepository, output: (param0: PackRepository) => void)
    // private iconGetter: (param0: Pack) => Identifier;
    // private onListChanged: (param0: PackSelectionModel$EntryBase) => void;
    // private output: (param0: PackRepository) => void;
    // private repository: PackRepository;
    readonly selected: Pack[];
    readonly unselected: Pack[];
    commit(): void;
    findNewPacks(): void;
    getSelected(): Stream<PackSelectionModel$Entry>;
    getUnselected(): Stream<PackSelectionModel$Entry>;
    // private updateRepoSelectedList(): void;
}