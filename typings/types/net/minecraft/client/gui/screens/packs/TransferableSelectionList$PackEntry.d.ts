import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { MultiLineTextWidget } from '../../../../../../net/minecraft/client/gui/components/MultiLineTextWidget.d.ts'
import type { SelectableEntry } from '../../../../../../net/minecraft/client/gui/components/SelectableEntry.d.ts'
import type { StringWidget } from '../../../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { PackSelectionModel$Entry } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel$Entry.d.ts'
import type { TransferableSelectionList } from '../../../../../../net/minecraft/client/gui/screens/packs/TransferableSelectionList.d.ts'
import type { TransferableSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/packs/TransferableSelectionList$Entry.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class TransferableSelectionList$PackEntry extends TransferableSelectionList$Entry implements SelectableEntry {
    static CONTENT_PADDING: number;
    static ICON_SIZE: number;
    constructor(null_: TransferableSelectionList, minecraft: Minecraft, parent: TransferableSelectionList, pack: PackSelectionModel$Entry)
    // private descriptionWidget: MultiLineTextWidget;
    // private minecraft: Minecraft;
    // private nameWidget: StringWidget;
    // private pack: PackSelectionModel$Entry;
    // private parent: TransferableSelectionList;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    getPackId(): string;
    // private handlePackSelection(): void;
    keyPressed(event: KeyEvent): boolean;
    // private keyboardMoveDown(): void;
    // private keyboardMoveUp(): void;
    keyboardSelection(): void;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseOverBottomLeftQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverBottomRightQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverIcon(relX: number, relY: number, size: number): boolean;
    mouseOverLeftHalf(relX: number, relY: number, size: number): boolean;
    mouseOverRightHalf(relX: number, relY: number, size: number): boolean;
    mouseOverTopLeftQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverTopRightQuarter(relX: number, relY: number, size: number): boolean;
    shouldTakeFocusAfterInteraction(): boolean;
    // private showHoverOverlay(): boolean;
}