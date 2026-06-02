import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { AbstractWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/AbstractWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { ComponentPath } from '../../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Renderable } from '../../../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { ContainerEventHandler } from '../../../../../../../net/minecraft/client/gui/components/events/ContainerEventHandler.d.ts'
import type { GuiEventListener } from '../../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { FocusNavigationEvent } from '../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { FocusNavigationEvent$ArrowNavigation } from '../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent$ArrowNavigation.d.ts'
import type { FocusNavigationEvent$TabNavigation } from '../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent$TabNavigation.d.ts'
import type { ScreenDirection } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { CharacterEvent } from '../../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
export abstract class AbstractParentWidget extends AbstractWidget implements ContainerEventHandler {
    constructor(arg0: Dim2i)
    // private children: GuiEventListener[];
    readonly dragging: boolean;
    // private focusedElement: GuiEventListener;
    // private renderableChildren: Renderable[];
    addChild<T extends GuiEventListener>(arg0: T): T;
    addRenderableChild<T extends GuiEventListener & Renderable>(arg0: T): T;
    charTyped(event: CharacterEvent): boolean;
    children(): GuiEventListener[];
    clearChildren(): void;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getChildAt(x: number, y: number): Optional<GuiEventListener>;
    getCurrentFocusPath(): ComponentPath;
    getFocused(): GuiEventListener;
    // private handleArrowNavigation(arrowNavigation: FocusNavigationEvent$ArrowNavigation): ComponentPath;
    // private handleTabNavigation(tabNavigation: FocusNavigationEvent$TabNavigation): ComponentPath;
    isDragging(): boolean;
    isFocused(): boolean;
    keyPressed(event: KeyEvent): boolean;
    keyReleased(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    // private nextFocusPathInDirection(focusedRectangle: ScreenRectangle, direction: ScreenDirection, excluded: GuiEventListener, navigationEvent: FocusNavigationEvent$ArrowNavigation): ComponentPath;
    // private nextFocusPathVaguelyInDirection(focusedRectangle: ScreenRectangle, direction: ScreenDirection, excluded: GuiEventListener, navigationEvent: FocusNavigationEvent): ComponentPath;
    preeditUpdated(event: PreeditEvent): boolean;
    removeChild(arg0: GuiEventListener): void;
    setDragging(arg0: boolean): void;
    setFocused(arg0: GuiEventListener): void;
    setFocused(focused: boolean): void;
}