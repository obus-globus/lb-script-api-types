import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { FittingMultiLineTextWidget } from '../../../../../../net/minecraft/client/gui/components/FittingMultiLineTextWidget.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerboundTestInstanceBlockActionPacket$Action } from '../../../../../../net/minecraft/network/protocol/game/ServerboundTestInstanceBlockActionPacket$Action.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { TestInstanceBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity.d.ts'
export class TestInstanceBlockEditScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(blockEntity: TestInstanceBlockEntity)
    // private blockEntity: TestInstanceBlockEntity;
    // private exportButton: Button;
    // private idEdit: EditBox;
    // private includeEntitiesButton: CycleButton<boolean>;
    // private infoWidget: FittingMultiLineTextWidget;
    // private rotationButton: CycleButton<Rotation>;
    // private saveButton: Button;
    // private sizeXEdit: EditBox;
    // private sizeYEdit: EditBox;
    // private sizeZEdit: EditBox;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    init(): void;
    isInGameUi(): boolean;
    // private onCancel(): void;
    // private onDone(): void;
    // private sendToServer(action: ServerboundTestInstanceBlockActionPacket$Action): boolean;
    // private setSize(size: Vec3i): void;
    setStatus(status: Component, size: Optional<Vec3i>): void;
    // private updateSaveState(): void;
    // private updateTestInfo(isInit: boolean): void;
    // private widgetX(index: number, count: number): number;
}