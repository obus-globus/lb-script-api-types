import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractCommandBlockEditScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractCommandBlockEditScreen.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BaseCommandBlock } from '../../../../../../net/minecraft/world/level/BaseCommandBlock.d.ts'
import type { CommandBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/CommandBlockEntity.d.ts'
import type { CommandBlockEntity$Mode } from '../../../../../../net/minecraft/world/level/block/entity/CommandBlockEntity$Mode.d.ts'
export class CommandBlockEditScreen extends AbstractCommandBlockEditScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(commandBlock: CommandBlockEntity)
    // private autoCommandBlock: CommandBlockEntity;
    // private autoexec: boolean;
    // private autoexecButton: CycleButton<boolean>;
    // private conditional: boolean;
    // private conditionalButton: CycleButton<boolean>;
    // private mode: CommandBlockEntity$Mode;
    // private modeButton: CycleButton<CommandBlockEntity$Mode>;
    addExtraControls(): void;
    // private enableControls(state: boolean): void;
    getCommandBlock(): BaseCommandBlock;
    getPreviousY(): number;
    init(): void;
    init(width: number, height: number): void;
    populateAndSendPacket(): void;
    resize(width: number, height: number): void;
    updateGui(): void;
}