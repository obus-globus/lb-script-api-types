import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { ComponentPath } from '../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { AbstractScrollArea } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ContainerEventHandler } from '../../../../../net/minecraft/client/gui/components/events/ContainerEventHandler.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { FocusNavigationEvent$ArrowNavigation } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent$ArrowNavigation.d.ts'
import type { FocusNavigationEvent$TabNavigation } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent$TabNavigation.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { CharacterEvent } from '../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class AbstractContainerWidget extends AbstractScrollArea implements ContainerEventHandler {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, message: Component, scrollbarSettings: AbstractScrollArea$ScrollbarSettings)
    readonly focused: GuiEventListener;
    // private isDragging: boolean;
    charTyped(event: CharacterEvent): boolean;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getChildAt(x: number, y: number): Optional<GuiEventListener>;
    getCurrentFocusPath(): ComponentPath;
    getFocused(): GuiEventListener;
    // private handleArrowNavigation(arrowNavigation: FocusNavigationEvent$ArrowNavigation): ComponentPath;
    // private handleTabNavigation(tabNavigation: FocusNavigationEvent$TabNavigation): ComponentPath;
    isDragging(): boolean;
    isFocused(): boolean;
    isFocused(): boolean;
    keyPressed(event: KeyEvent): boolean;
    keyReleased(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    // private nextFocusPathInDirection(focusedRectangle: ScreenRectangle, direction: ScreenDirection, excluded: GuiEventListener, navigationEvent: FocusNavigationEvent$ArrowNavigation): ComponentPath;
    // private nextFocusPathVaguelyInDirection(focusedRectangle: ScreenRectangle, direction: ScreenDirection, excluded: GuiEventListener, navigationEvent: FocusNavigationEvent): ComponentPath;
    preeditUpdated(event: PreeditEvent): boolean;
    setDragging(dragging: boolean): void;
    setFocused(focused: boolean): void;
    setFocused(focused: GuiEventListener): void;
    setFocused(focused: boolean): void;
}