import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { JigsawBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/JigsawBlockEntity.d.ts'
import type { JigsawBlockEntity$JointType } from '../../../../../../net/minecraft/world/level/block/entity/JigsawBlockEntity$JointType.d.ts'
export class JigsawBlockEditScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static isValidIdentifier(paramlocation: string): boolean;
    constructor(jigsawEntity: JigsawBlockEntity)
    // private doneButton: Button;
    // private finalStateEdit: EditBox;
    // private generateButton: Button;
    // private jigsawEntity: JigsawBlockEntity;
    // private joint: JigsawBlockEntity$JointType;
    // private jointButton: CycleButton<JigsawBlockEntity$JointType>;
    // private keepJigsaws: boolean;
    // private levels: number;
    // private nameEdit: EditBox;
    // private placementPriorityEdit: EditBox;
    // private poolEdit: EditBox;
    // private selectionPriorityEdit: EditBox;
    // private targetEdit: EditBox;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    init(): void;
    init(width: number, height: number): void;
    isInGameUi(): boolean;
    keyPressed(event: KeyEvent): boolean;
    // private onCancel(): void;
    onClose(): void;
    // private onDone(): void;
    // private parseAsInt(value: string): number;
    resize(width: number, height: number): void;
    // private sendGenerate(): void;
    // private sendToServer(): void;
    setInitialFocus(): void;
    setInitialFocus(target: GuiEventListener): void;
    // private updateValidity(): void;
}