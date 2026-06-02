import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { WorldSelectionList } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList.d.ts'
import type { WorldSelectionList$EntryType } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList$EntryType.d.ts'
import type { WorldSelectionList$WorldListEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList$WorldListEntry.d.ts'
import type { LevelSummary } from '../../../../../../net/minecraft/world/level/storage/LevelSummary.d.ts'
export class WorldSelectionList$Builder extends Object {
    constructor(minecraft: Minecraft, screen: Screen)
    // private filter: string;
    // private height: number;
    // private minecraft: Minecraft;
    // private oldList: WorldSelectionList;
    // private onEntryInteract: (param0: WorldSelectionList$WorldListEntry) => void;
    // private onEntrySelect: (param0: LevelSummary) => void;
    // private screen: Screen;
    // private type: WorldSelectionList$EntryType;
    // private width: number;
    build(): WorldSelectionList;
    filter(filter: string): WorldSelectionList$Builder;
    height(height: number): WorldSelectionList$Builder;
    oldList(oldList: WorldSelectionList): WorldSelectionList$Builder;
    onEntryInteract(onEntryInteract: (param0: WorldSelectionList$WorldListEntry) => void): WorldSelectionList$Builder;
    onEntrySelect(onEntrySelect: (param0: LevelSummary) => void): WorldSelectionList$Builder;
    uploadWorld(): WorldSelectionList$Builder;
    width(width: number): WorldSelectionList$Builder;
}