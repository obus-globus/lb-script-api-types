import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ComponentPath } from '../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { TabOrderedElement } from '../../../../../../net/minecraft/client/gui/components/TabOrderedElement.d.ts'
import type { FocusNavigationEvent } from '../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { CharacterEvent } from '../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
export interface GuiEventListener extends Object, TabOrderedElement{
    charTyped(event: CharacterEvent): boolean;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getCurrentFocusPath(): ComponentPath;
    getRectangle(): ScreenRectangle;
    getTabOrderGroup(): number;
    isFocused(): boolean;
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
    shouldTakeFocusAfterInteraction(): boolean;
}