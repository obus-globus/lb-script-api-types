import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ComponentPath } from '../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractSelectionList } from '../../../../../net/minecraft/client/gui/components/AbstractSelectionList.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { CharacterEvent } from '../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
export abstract class AbstractSelectionList$Entry<E extends AbstractSelectionList$Entry<E>> extends Object implements GuiEventListener, LayoutElement {
    static CONTENT_PADDING: number;
    constructor()
    readonly height: number;
    // private list: AbstractSelectionList<E>;
    readonly width: number;
    readonly x: number;
    readonly y: number;
    charTyped(event: CharacterEvent): boolean;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getContentBottom(): number;
    getContentHeight(): number;
    getContentRight(): number;
    getContentWidth(): number;
    getContentX(): number;
    getContentXMiddle(): number;
    getContentY(): number;
    getContentYMiddle(): number;
    getCurrentFocusPath(): ComponentPath;
    getHeight(): number;
    getRectangle(): ScreenRectangle;
    getRectangle(): ScreenRectangle;
    getRectangle(): ScreenRectangle;
    getWidth(): number;
    getX(): number;
    getY(): number;
    isFocused(): boolean;
    isMouseOver(mx: number, my: number): boolean;
    isMouseOver(mouseX: number, mouseY: number): boolean;
    keyPressed(event: KeyEvent): boolean;
    keyReleased(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseMoved(x: number, y: number): void;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    preeditUpdated(event: PreeditEvent): boolean;
    setFocused(focused: boolean): void;
    setHeight(height: number): void;
    setPosition(x: number, y: number): void;
    setWidth(width: number): void;
    setX(x: number): void;
    setY(y: number): void;
    shouldTakeFocusAfterInteraction(): boolean;
    visitWidgets(widgetVisitor: (param0: AbstractWidget) => void): void;
}