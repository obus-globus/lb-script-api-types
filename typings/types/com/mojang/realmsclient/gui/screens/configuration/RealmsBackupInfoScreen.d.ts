import type { Backup } from '../../../../../../com/mojang/realmsclient/dto/Backup.d.ts'
import type { RealmsBackupInfoScreen$BackupInfoList } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsBackupInfoScreen$BackupInfoList.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsBackupInfoScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, backup: Backup)
    // private backup: Backup;
    // private backupInfoList: RealmsBackupInfoScreen$BackupInfoList;
    // private lastScreen: Screen;
    // private layout: HeaderAndFooterLayout;
    // private checkForSpecificMetadata(key: string, value: string): Component;
    // private gameDifficultyMetadata(value: string): Component;
    // private gameModeMetadata(value: string): Component;
    init(): void;
    onClose(): void;
    // private parseWorldType(value: string): Component;
    repositionElements(): void;
}