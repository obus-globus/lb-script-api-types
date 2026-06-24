import type { RealmsBackupInfoScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsBackupInfoScreen.d.ts'
import type { RealmsBackupInfoScreen$BackupInfoListEntry } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsBackupInfoScreen$BackupInfoListEntry.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class RealmsBackupInfoScreen$BackupInfoList extends ObjectSelectionList<RealmsBackupInfoScreen$BackupInfoListEntry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: RealmsBackupInfoScreen, minecraft: Minecraft)
}