import type { RealmsPendingInvitesScreen } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsPendingInvitesScreen.d.ts'
import type { RealmsPendingInvitesScreen$Entry } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsPendingInvitesScreen$Entry.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ContainerObjectSelectionList } from '../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class RealmsPendingInvitesScreen$PendingInvitationSelectionList extends ContainerObjectSelectionList<RealmsPendingInvitesScreen$Entry> {
    static ITEM_HEIGHT: number;
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: RealmsPendingInvitesScreen, minecraft: Minecraft)
    getRowWidth(): number;
    hasPendingInvites(): boolean;
    removeInvitation(entry: RealmsPendingInvitesScreen$Entry): void;
}