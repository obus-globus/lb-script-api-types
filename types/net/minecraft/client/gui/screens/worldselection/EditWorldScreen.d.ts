import type { BooleanConsumer } from '../../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
export class EditWorldScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static conditionallyMakeBackupAndShowToast(paramcreateBackup: boolean, paramaccess: LevelStorageSource$LevelStorageAccess): CompletableFuture<boolean>;
    static create(paramminecraft: Minecraft, paramlevelAccess: LevelStorageSource$LevelStorageAccess, paramcallback: (param0: boolean) => void): EditWorldScreen;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static makeBackupAndShowToast(paramaccess: LevelStorageSource$LevelStorageAccess): CompletableFuture<boolean>;
    private constructor(minecraft: Minecraft, levelAccess: LevelStorageSource$LevelStorageAccess, name: string, callback: (param0: boolean) => void)
    // private callback: (param0: boolean) => void;
    // private layout: LinearLayout;
    // private levelAccess: LevelStorageSource$LevelStorageAccess;
    // private nameEdit: EditBox;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    init(): void;
    keyPressed(event: KeyEvent): boolean;
    onClose(): void;
    // private onRename(newName: string): void;
    repositionElements(): void;
    setInitialFocus(): void;
}