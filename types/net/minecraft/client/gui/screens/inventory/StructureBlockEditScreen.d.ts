import type { DecimalFormat } from '../../../../../../java/text/DecimalFormat.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Mirror } from '../../../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { StructureBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/StructureBlockEntity.d.ts'
import type { StructureBlockEntity$UpdateType } from '../../../../../../net/minecraft/world/level/block/entity/StructureBlockEntity$UpdateType.d.ts'
import type { StructureMode } from '../../../../../../net/minecraft/world/level/block/state/properties/StructureMode.d.ts'
export class StructureBlockEditScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(structure: StructureBlockEntity)
    // private dataEdit: EditBox;
    // private decimalFormat: DecimalFormat;
    // private detectButton: Button;
    // private includeEntitiesButton: CycleButton<boolean>;
    // private initialEntityIgnoring: boolean;
    // private initialMirror: Mirror;
    // private initialMode: StructureMode;
    // private initialRotation: Rotation;
    // private initialShowAir: boolean;
    // private initialShowBoundingBox: boolean;
    // private initialStrict: boolean;
    // private integrityEdit: EditBox;
    // private loadButton: Button;
    // private mirrorButton: CycleButton<Mirror>;
    // private nameEdit: EditBox;
    // private posXEdit: EditBox;
    // private posYEdit: EditBox;
    // private posZEdit: EditBox;
    // private rot0Button: Button;
    // private rot180Button: Button;
    // private rot270Button: Button;
    // private rot90Button: Button;
    // private saveButton: Button;
    // private seedEdit: EditBox;
    // private sizeXEdit: EditBox;
    // private sizeYEdit: EditBox;
    // private sizeZEdit: EditBox;
    // private strictButton: CycleButton<boolean>;
    // private structure: StructureBlockEntity;
    // private toggleAirButton: CycleButton<boolean>;
    // private toggleBoundingBox: CycleButton<boolean>;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    init(): void;
    isInGameUi(): boolean;
    isPauseScreen(): boolean;
    keyPressed(event: KeyEvent): boolean;
    // private onCancel(): void;
    onClose(): void;
    // private onDone(): void;
    // private parseCoordinate(value: string): number;
    // private parseIntegrity(value: string): number;
    // private parseSeed(value: string): number;
    resize(width: number, height: number): void;
    // private sendToServer(updateType: StructureBlockEntity$UpdateType): boolean;
    setInitialFocus(): void;
    // private updateDirectionButtons(): void;
    // private updateMode(mode: StructureMode): void;
}