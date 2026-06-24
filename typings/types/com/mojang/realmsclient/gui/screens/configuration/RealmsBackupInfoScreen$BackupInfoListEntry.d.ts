import type { RealmsBackupInfoScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsBackupInfoScreen.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsBackupInfoScreen$BackupInfoListEntry extends ObjectSelectionList$Entry<RealmsBackupInfoScreen$BackupInfoListEntry> {
    static CONTENT_PADDING: number;
    constructor(null_: RealmsBackupInfoScreen, key: string, value: string)
    // private key: string;
    // private keyComponent: Component;
    // private value: string;
    // private valueComponent: Component;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    // private translateKey(key: string): Component;
}