import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NavigationController } from '../../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { ShaderPackScreen } from '../../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { ComponentPath } from '../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarratableEntry$NarrationPriority } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry$NarrationPriority.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FocusNavigationEvent } from '../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { CharacterEvent } from '../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
export abstract class AbstractElementWidget<T extends OptionMenuElement> extends Object implements GuiEventListener, NarratableEntry {
    static EMPTY: AbstractElementWidget<OptionMenuElement>;
    constructor(arg0: T)
    bounds: ScreenRectangle;
    // private element: T;
    readonly focused: boolean;
    charTyped(event: CharacterEvent): boolean;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getCurrentFocusPath(): ComponentPath;
    getNarratables(): E[];
    getRectangle(): ScreenRectangle;
    getRectangle(): ScreenRectangle;
    init(arg0: ShaderPackScreen, arg1: NavigationController): void;
    isActive(): boolean;
    isFocused(): boolean;
    isMouseOver(mouseX: number, mouseY: number): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    keyPressed(event: KeyEvent): boolean;
    keyReleased(event: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseMoved(x: number, y: number): void;
    mouseReleased(arg0: MouseButtonEvent): boolean;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    narrationPriority(): NarratableEntry$NarrationPriority;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    preeditUpdated(event: PreeditEvent): boolean;
    render(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    setFocused(arg0: boolean): void;
    shouldTakeFocusAfterInteraction(): boolean;
    updateNarration(arg0: NarrationElementOutput): void;
}