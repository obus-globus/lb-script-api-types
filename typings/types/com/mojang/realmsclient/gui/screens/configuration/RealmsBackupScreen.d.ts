import type { Backup } from '../../../../../../com/mojang/realmsclient/dto/Backup.d.ts'
import type { RealmsServer } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsBackupScreen$BackupObjectSelectionList } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsBackupScreen$BackupObjectSelectionList.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { DateTimeFormatter } from '../../../../../../java/time/format/DateTimeFormatter.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsBackupScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static SHORT_DATE_FORMAT: DateTimeFormatter;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: RealmsConfigureWorldScreen, serverData: RealmsServer, slotId: number)
    // private backupList: RealmsBackupScreen$BackupObjectSelectionList;
    // private backups: Backup[];
    // private downloadButton: Button;
    // private lastScreen: RealmsConfigureWorldScreen;
    // private layout: HeaderAndFooterLayout;
    // private noBackups: boolean;
    // private serverData: RealmsServer;
    // private slotId: number;
    // private downloadClicked(): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private fetchRealmsBackups(): void;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    repositionElements(): void;
}