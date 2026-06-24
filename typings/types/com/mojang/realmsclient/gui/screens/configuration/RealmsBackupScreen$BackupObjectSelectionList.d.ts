import type { RealmsBackupScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsBackupScreen.d.ts'
import type { RealmsBackupScreen$Entry } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsBackupScreen$Entry.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ContainerObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class RealmsBackupScreen$BackupObjectSelectionList extends ContainerObjectSelectionList<RealmsBackupScreen$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: RealmsBackupScreen)
    getRowWidth(): number;
}