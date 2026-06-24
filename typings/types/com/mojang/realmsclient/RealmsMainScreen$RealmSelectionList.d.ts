import type { RealmsMainScreen } from '../../../com/mojang/realmsclient/RealmsMainScreen.d.ts'
import type { RealmsMainScreen$Entry } from '../../../com/mojang/realmsclient/RealmsMainScreen$Entry.d.ts'
import type { RealmsNotification$VisitUrl } from '../../../com/mojang/realmsclient/dto/RealmsNotification$VisitUrl.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { SoundManager } from '../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class RealmsMainScreen$RealmSelectionList extends ObjectSelectionList<RealmsMainScreen$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: RealmsMainScreen)
    // private addEntriesForNotification(visitUrl: RealmsNotification$VisitUrl, realmsMainScreen: RealmsMainScreen, previouslySelected: RealmsMainScreen$Entry): void;
    getRowWidth(): number;
    // private refreshEntries(realmsMainScreen: RealmsMainScreen): void;
    // private refreshServerEntries(previouslySelected: RealmsMainScreen$Entry): void;
    setSelected(selected: RealmsMainScreen$Entry): void;
}