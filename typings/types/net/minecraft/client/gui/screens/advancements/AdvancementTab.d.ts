import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AdvancementTabAccessor } from '../../../../../../net/fabricmc/fabric/mixin/client/rendering/advancement/AdvancementTabAccessor.d.ts'
import type { AdvancementHolder } from '../../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementNode } from '../../../../../../net/minecraft/advancements/AdvancementNode.d.ts'
import type { DisplayInfo } from '../../../../../../net/minecraft/advancements/DisplayInfo.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AdvancementTabType } from '../../../../../../net/minecraft/client/gui/screens/advancements/AdvancementTabType.d.ts'
import type { AdvancementWidget } from '../../../../../../net/minecraft/client/gui/screens/advancements/AdvancementWidget.d.ts'
import type { AdvancementsScreen } from '../../../../../../net/minecraft/client/gui/screens/advancements/AdvancementsScreen.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class AdvancementTab extends Object implements AdvancementTabAccessor {
    static create(paramminecraft: Minecraft, paramscreen: AdvancementsScreen, paramindex: number, paramroot: AdvancementNode): AdvancementTab;
    constructor(minecraft: Minecraft, screen: AdvancementsScreen, type: AdvancementTabType, index: number, rootNode: AdvancementNode, display: DisplayInfo)
    // private centered: boolean;
    readonly display: DisplayInfo;
    // private fade: number;
    // private icon: ItemStack;
    readonly index: number;
    // private maxX: number;
    // private maxY: number;
    // private minX: number;
    // private minY: number;
    // private minecraft: Minecraft;
    // private root: AdvancementWidget;
    readonly rootNode: AdvancementNode;
    readonly screen: AdvancementsScreen;
    // private scrollX: number;
    // private scrollY: number;
    readonly title: Component;
    readonly type: AdvancementTabType;
    // private widgets: Map<AdvancementHolder, AdvancementWidget>;
    addAdvancement(node: AdvancementNode): void;
    // private addWidget(widget: AdvancementWidget, advancement: AdvancementHolder): void;
    canScrollHorizontally(): boolean;
    canScrollVertically(): boolean;
    extractContents(graphics: GuiGraphicsExtractor, windowLeft: number, windowTop: number): void;
    extractIcon(graphics: GuiGraphicsExtractor, xo: number, yo: number): void;
    extractTab(graphics: GuiGraphicsExtractor, xo: number, yo: number, mouseX: number, mouseY: number, selected: boolean): void;
    extractTooltips(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, xo: number, yo: number): void;
    getDisplay(): DisplayInfo;
    getIndex(): number;
    getRootNode(): AdvancementNode;
    getScreen(): AdvancementsScreen;
    getTitle(): Component;
    getType(): AdvancementTabType;
    getWidget(advancement: AdvancementHolder): AdvancementWidget;
    isMouseOver(xo: number, yo: number, mx: number, my: number): boolean;
    scroll(x: number, y: number): void;
}