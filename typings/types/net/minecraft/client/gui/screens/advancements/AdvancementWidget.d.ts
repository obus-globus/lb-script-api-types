import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AdvancementWidgetAccessor } from '../../../../../../net/fabricmc/fabric/mixin/client/rendering/advancement/AdvancementWidgetAccessor.d.ts'
import type { AdvancementNode } from '../../../../../../net/minecraft/advancements/AdvancementNode.d.ts'
import type { AdvancementProgress } from '../../../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { DisplayInfo } from '../../../../../../net/minecraft/advancements/DisplayInfo.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AdvancementTab } from '../../../../../../net/minecraft/client/gui/screens/advancements/AdvancementTab.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { FormattedText } from '../../../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class AdvancementWidget extends Object implements AdvancementWidgetAccessor {
    constructor(tab: AdvancementTab, minecraft: Minecraft, advancementNode: AdvancementNode, display: DisplayInfo)
    // private advancementNode: AdvancementNode;
    // private children: AdvancementWidget[];
    // private description: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    // private display: DisplayInfo;
    // private icon: ItemStack;
    // private minecraft: Minecraft;
    // private parent: AdvancementWidget;
    readonly progress: AdvancementProgress;
    // private tab: AdvancementTab;
    // private titleLines: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    readonly width: number;
    readonly x: number;
    readonly y: number;
    addChild(widget: AdvancementWidget): void;
    attachToParent(): void;
    // private extractAdvancementFrame(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: () => void): void;
    // private extractAdvancementIcon(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: () => void): void;
    extractConnectivity(graphics: GuiGraphicsExtractor, xo: number, yo: number, background: boolean): void;
    extractHover(graphics: GuiGraphicsExtractor, xo: number, yo: number, fade: number, screenxo: number, screenyo: number): void;
    // private extractMultilineText(graphics: GuiGraphicsExtractor, lines: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[], x: number, y: number, color: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, xo: number, yo: number): void;
    // private findOptimalLines(input: Component, preferredWidth: number): FormattedText[];
    // private getFirstVisibleParent(node: AdvancementNode): AdvancementWidget;
    // private getMaxProgressWidth(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    isMouseOver(xo: number, yo: number, mouseX: number, mouseY: number): boolean;
    setProgress(progress: AdvancementProgress): void;
}