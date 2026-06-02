import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenPrompt$Action } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/prompt/ScreenPrompt$Action.d.ts'
import type { ScreenPromptable } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/prompt/ScreenPromptable.d.ts'
import type { AbstractWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/AbstractWidget.d.ts'
import type { FlatButtonWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/FlatButtonWidget.d.ts'
import type { ComponentPath } from '../../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Renderable } from '../../../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { GuiEventListener } from '../../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { FocusNavigationEvent } from '../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { CharacterEvent } from '../../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { FormattedText } from '../../../../../../../net/minecraft/network/chat/FormattedText.d.ts'
export class ScreenPrompt extends Object implements Renderable, GuiEventListener {
    static PROMPT_HEIGHT: number;
    static PROMPT_WIDTH: number;
    constructor(arg0: ScreenPromptable, arg1: FormattedText[], arg2: number, arg3: number, arg4: ScreenPrompt$Action)
    // private action: ScreenPrompt$Action;
    // private actionButton: FlatButtonWidget;
    // private closeButton: FlatButtonWidget;
    // private height: number;
    // private parent: ScreenPromptable;
    // private text: FormattedText[];
    // private width: number;
    charTyped(event: CharacterEvent): boolean;
    // private close(): void;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getCurrentFocusPath(): ComponentPath;
    getRectangle(): ScreenRectangle;
    getWidgets(): AbstractWidget[];
    init(): void;
    isFocused(): boolean;
    isMouseOver(mouseX: number, mouseY: number): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    keyPressed(event: KeyEvent): boolean;
    keyReleased(event: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseMoved(x: number, y: number): void;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    preeditUpdated(event: PreeditEvent): boolean;
    // private runAction(): void;
    setFocused(arg0: boolean): void;
    shouldTakeFocusAfterInteraction(): boolean;
}