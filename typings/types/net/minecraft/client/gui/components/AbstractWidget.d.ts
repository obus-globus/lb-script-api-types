import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ActiveTextCollector } from '../../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { ComponentPath } from '../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Renderable } from '../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { Tooltip } from '../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { WidgetTooltipHolder } from '../../../../../net/minecraft/client/gui/components/WidgetTooltipHolder.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarratableEntry$NarrationPriority } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry$NarrationPriority.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { CharacterEvent } from '../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { MouseButtonInfo } from '../../../../../net/minecraft/client/input/MouseButtonInfo.d.ts'
import type { PreeditEvent } from '../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class AbstractWidget extends Object implements Renderable, GuiEventListener, LayoutElement, NarratableEntry {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, message: Component)
    active: boolean;
    alpha: number;
    readonly focused: boolean;
    height: number;
    // private isHovered: boolean;
    message: Component;
    readonly tabOrderGroup: number;
    readonly tooltip: WidgetTooltipHolder;
    visible: boolean;
    width: number;
    readonly x: number;
    readonly y: number;
    // private areCoordinatesInRectangle(x: number, y: number): boolean;
    charTyped(event: CharacterEvent): boolean;
    createNarrationMessage(): MutableComponent;
    defaultButtonNarrationText(output: NarrationElementOutput): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractScrollingStringOverContents(output: ActiveTextCollector, message: Component, margin: number): void;
    extractTooltipForNextRenderPass(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getAlpha(): number;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getBottom(): number;
    getCurrentFocusPath(): ComponentPath;
    getHeight(): number;
    getMessage(): Component;
    getNarratables(): NarratableEntry[];
    getRectangle(): ScreenRectangle;
    getRight(): number;
    getTabOrderGroup(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    handleCursor(graphics: GuiGraphicsExtractor): void;
    isActive(): boolean;
    isFocused(): boolean;
    isHovered(): boolean;
    isHoveredOrFocused(): boolean;
    isMouseOver(mouseX: number, mouseY: number): boolean;
    isValidClickButton(buttonInfo: MouseButtonInfo): boolean;
    keyPressed(event: KeyEvent): boolean;
    keyReleased(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseMoved(x: number, y: number): void;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    narrationPriority(): NarratableEntry$NarrationPriority;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    onClick(event: MouseButtonEvent, doubleClick: boolean): void;
    onDrag(event: MouseButtonEvent, dx: number, dy: number): void;
    onRelease(event: MouseButtonEvent): void;
    playDownSound(soundManager: SoundManager): void;
    preeditUpdated(event: PreeditEvent): boolean;
    setAlpha(alpha: number): void;
    setFocused(focused: boolean): void;
    setHeight(height: number): void;
    setMessage(message: Component): void;
    setPosition(x: number, y: number): void;
    setRectangle(width: number, height: number, x: number, y: number): void;
    setSize(width: number, height: number): void;
    setTabOrderGroup(tabOrderGroup: number): void;
    setTooltip(tooltip: Tooltip): void;
    setTooltipDelay(delay: Duration): void;
    setWidth(width: number): void;
    setX(x: number): void;
    setY(y: number): void;
    shouldTakeFocusAfterInteraction(): boolean;
    updateNarration(output: NarrationElementOutput): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
    visitWidgets(widgetVisitor: (param0: AbstractWidget) => void): void;
}