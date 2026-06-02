import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { CommandSuggestions } from '../../../../../../net/minecraft/client/gui/components/CommandSuggestions.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BaseCommandBlock } from '../../../../../../net/minecraft/world/level/BaseCommandBlock.d.ts'
export abstract class AbstractCommandBlockEditScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor()
    // private cancelButton: Button;
    // private commandEdit: EditBox;
    // private commandSuggestions: CommandSuggestions;
    // private doneButton: Button;
    // private outputButton: CycleButton<boolean>;
    // private previousEdit: EditBox;
    addExtraControls(): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getCommandBlock(): BaseCommandBlock;
    getPreviousY(): number;
    getUsageNarration(): Component;
    init(): void;
    isInGameUi(): boolean;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    onDone(): void;
    // private onEdited(value: string): void;
    populateAndSendPacket(): void;
    resize(width: number, height: number): void;
    setInitialFocus(): void;
    tick(): void;
    updatePreviousOutput(isTracking: boolean): void;
}