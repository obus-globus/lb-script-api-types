import type { DecimalFormat } from '../../../../../java/text/DecimalFormat.d.ts'
import type { TaskManager } from '../../../../../net/ccbluex/liquidbounce/integration/task/TaskManager.d.ts'
import type { Task } from '../../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Screen that displays TaskManager progress
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskProgressScreen.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskProgressScreen.kt:42}
 */
export class TaskProgressScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(title: string, taskManager: TaskManager)
    // private percentFormat: DecimalFormat;
    // private taskManager: TaskManager;
    // private calculateTotalSpeed(tasks: Task[]): number;
    extractRenderState(context: GuiGraphicsExtractor, mouseX: number, mouseY: number, partialTick: number): void;
    // private formatTotalSpeed(tasks: Task[]): string;
    // private getTaskLines(progress: number): Component[];
    isPauseScreen(): boolean;
    shouldCloseOnEsc(): boolean;
    tick(): void;
}