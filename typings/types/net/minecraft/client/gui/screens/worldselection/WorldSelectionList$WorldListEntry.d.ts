import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { SelectableEntry } from '../../../../../../net/minecraft/client/gui/components/SelectableEntry.d.ts'
import type { StringWidget } from '../../../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { FaviconTexture } from '../../../../../../net/minecraft/client/gui/screens/FaviconTexture.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { WorldSelectionList } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList.d.ts'
import type { WorldSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList$Entry.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { LevelSummary } from '../../../../../../net/minecraft/world/level/storage/LevelSummary.d.ts'
export class WorldSelectionList$WorldListEntry extends WorldSelectionList$Entry implements SelectableEntry {
    static CONTENT_PADDING: number;
    constructor(null_: WorldSelectionList, list: WorldSelectionList, summary: LevelSummary)
    // private icon: FaviconTexture;
    // private iconFile: Path[];
    // private idAndLastPlayedText: StringWidget;
    // private infoText: StringWidget;
    // private list: WorldSelectionList;
    // private minecraft: Minecraft;
    // private screen: Screen;
    // private summary: LevelSummary;
    // private worldNameText: StringWidget;
    canInteract(): boolean;
    close(): void;
    deleteWorld(): void;
    doDeleteWorld(): void;
    editWorld(): void;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getLevelName(): string;
    getLevelSummary(): LevelSummary;
    getNarration(): Component;
    // private getTextX(): number;
    joinWorld(): void;
    keyPressed(event: KeyEvent): boolean;
    // private loadIcon(): void;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseOverBottomLeftQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverBottomRightQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverIcon(relX: number, relY: number, size: number): boolean;
    mouseOverLeftHalf(relX: number, relY: number, size: number): boolean;
    mouseOverRightHalf(relX: number, relY: number, size: number): boolean;
    mouseOverTopLeftQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverTopRightQuarter(relX: number, relY: number, size: number): boolean;
    // private queueLoadScreen(): void;
    recreateWorld(): void;
    // private validateIconFile(): void;
}