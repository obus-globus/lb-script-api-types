import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Tooltip } from '../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { ClientTooltipPositioner } from '../../../../../net/minecraft/client/gui/screens/inventory/tooltip/ClientTooltipPositioner.d.ts'
export class WidgetTooltipHolder extends Object {
    constructor()
    readonly delay: Duration;
    // private displayStartTime: number;
    // private tooltip: Tooltip;
    // private wasDisplayed: boolean;
    // private createTooltipPositioner(screenRectangle: ScreenRectangle, isHovered: boolean, isFocused: boolean): ClientTooltipPositioner;
    get(): Tooltip;
    refreshTooltipForNextRenderPass(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, isHovered: boolean, isFocused: boolean, screenRectangle: ScreenRectangle): void;
    set(tooltip: Tooltip): void;
    setDelay(delay: Duration): void;
    updateNarration(output: NarrationElementOutput): void;
}