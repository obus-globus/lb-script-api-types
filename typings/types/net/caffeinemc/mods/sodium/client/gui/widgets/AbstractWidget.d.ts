import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Dimensioned } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/Dimensioned.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { ComponentPath } from '../../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { Font } from '../../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Renderable } from '../../../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { GuiEventListener } from '../../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarratableEntry$NarrationPriority } from '../../../../../../../net/minecraft/client/gui/narration/NarratableEntry$NarrationPriority.d.ts'
import type { NarrationElementOutput } from '../../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FocusNavigationEvent } from '../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { CharacterEvent } from '../../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { FormattedText } from '../../../../../../../net/minecraft/network/chat/FormattedText.d.ts'
export abstract class AbstractWidget extends Object implements Dimensioned, Renderable, GuiEventListener, NarratableEntry {
    constructor(arg0: Dim2i)
    // private dim: Dim2i;
    focused: boolean;
    // private font: Font;
    hovered: boolean;
    charTyped(event: CharacterEvent): boolean;
    drawBorder(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    drawCenteredString(arg0: GuiGraphicsExtractor, arg1: Component, arg2: number, arg3: number, arg4: number): void;
    drawRect(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    drawString(arg0: GuiGraphicsExtractor, arg1: string, arg2: number, arg3: number, arg4: number): void;
    drawString(arg0: GuiGraphicsExtractor, arg1: Component, arg2: number, arg3: number, arg4: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getCenterX(): number;
    getCenterY(): number;
    getCurrentFocusPath(): ComponentPath;
    getDimensions(): Dim2i;
    getHeight(): number;
    getLimitX(): number;
    getLimitY(): number;
    getNarratables(): NarratableEntry[];
    getRectangle(): ScreenRectangle;
    getStringWidth(arg0: FormattedText): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    isActive(): boolean;
    isFocused(): boolean;
    isHovered(): boolean;
    isMouseOver(arg0: number, arg1: number): boolean;
    isMouseOver(mouseX: number, mouseY: number): boolean;
    keyPressed(event: KeyEvent): boolean;
    keyReleased(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseMoved(x: number, y: number): void;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    narrationPriority(): NarratableEntry$NarrationPriority;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    playClickSound(): void;
    preeditUpdated(event: PreeditEvent): boolean;
    setFocused(arg0: boolean): void;
    shouldTakeFocusAfterInteraction(): boolean;
    truncateTextToFit(arg0: string, arg1: number): string;
    updateNarration(arg0: NarrationElementOutput): void;
}