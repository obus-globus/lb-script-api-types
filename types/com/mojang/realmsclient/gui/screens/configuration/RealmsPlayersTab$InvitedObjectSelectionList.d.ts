import type { RealmsServer } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsPlayersTab$Entry } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsPlayersTab$Entry.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ContainerObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class RealmsPlayersTab$InvitedObjectSelectionList extends ContainerObjectSelectionList<RealmsPlayersTab$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: RealmsPlayersTab$InvitedObjectSelectionList, width: number, height: number)
    extractListBackground(graphics: GuiGraphicsExtractor): void;
    extractListSeparators(graphics: GuiGraphicsExtractor): void;
    getRowWidth(): number;
    // private populateList(serverData: RealmsServer): void;
    // private updateList(serverData: RealmsServer): void;
}