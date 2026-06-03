import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { MultiLineTextWidget } from '../../../../../net/minecraft/client/gui/components/MultiLineTextWidget.d.ts'
import type { LinearLayout } from '../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
export class RecoverWorldDataScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(minecraft: Minecraft, callback: (param0: boolean) => void, storageAccess: LevelStorageSource$LevelStorageAccess)
    // private callback: (param0: boolean) => void;
    // private issuesWidget: MultiLineTextWidget;
    // private layout: LinearLayout;
    // private message: Component;
    // private messageWidget: MultiLineTextWidget;
    // private storageAccess: LevelStorageSource$LevelStorageAccess;
    // private attemptRestore(minecraft: Minecraft): void;
    // private buildInfo(access: LevelStorageSource$LevelStorageAccess, fallback: boolean, exception: Exception): Component;
    // private collectIssue(access: LevelStorageSource$LevelStorageAccess, useFallback: boolean): Exception;
    getNarrationMessage(): Component;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    repositionElements(): void;
}