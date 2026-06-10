import type { DataFixer } from '../../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { BooleanConsumer } from '../../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { WorldUpgrader } from '../../../../../../net/minecraft/util/worldupdate/WorldUpgrader.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
import type { WorldData } from '../../../../../../net/minecraft/world/level/storage/WorldData.d.ts'
export class OptimizeWorldScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static create(paramminecraft: Minecraft, paramcallback: (param0: boolean) => void, paramdataFixer: DataFixer, paramlevelSourceAccess: LevelStorageSource$LevelStorageAccess, parameraseCache: boolean): OptimizeWorldScreen;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    private constructor(callback: (param0: boolean) => void, dataFixer: DataFixer, levelSource: LevelStorageSource$LevelStorageAccess, worldData: WorldData, eraseCache: boolean, registryAccess: RegistryAccess)
    // private callback: (param0: boolean) => void;
    // private upgrader: WorldUpgrader;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    removed(): void;
    shouldCloseOnEsc(): boolean;
    tick(): void;
}