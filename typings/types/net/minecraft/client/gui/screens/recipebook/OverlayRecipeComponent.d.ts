import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ComponentPath } from '../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Renderable } from '../../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { FocusNavigationEvent } from '../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { OverlayRecipeComponent$OverlayRecipeButton } from '../../../../../../net/minecraft/client/gui/screens/recipebook/OverlayRecipeComponent$OverlayRecipeButton.d.ts'
import type { RecipeCollection } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeCollection.d.ts'
import type { SlotSelectTime } from '../../../../../../net/minecraft/client/gui/screens/recipebook/SlotSelectTime.d.ts'
import type { CharacterEvent } from '../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { PreeditEvent } from '../../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { ContextMap } from '../../../../../../net/minecraft/util/context/ContextMap.d.ts'
import type { RecipeDisplayId } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
export class OverlayRecipeComponent extends Object implements Renderable, GuiEventListener {
    static BUTTON_SIZE: number;
    constructor(slotSelectTime: () => number, isFurnaceMenu: boolean)
    // private collection: RecipeCollection;
    // private isFurnaceMenu: boolean;
    // private isVisible: boolean;
    readonly lastRecipeClicked: RecipeDisplayId;
    // private recipeButtons: OverlayRecipeComponent$OverlayRecipeButton[];
    // private slotSelectTime: () => number;
    // private x: number;
    // private y: number;
    charTyped(event: CharacterEvent): boolean;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getCurrentFocusPath(): ComponentPath;
    getLastRecipeClicked(): RecipeDisplayId;
    getRecipeCollection(): RecipeCollection;
    getRectangle(): ScreenRectangle;
    init(collection: RecipeCollection, context: ContextMap, isFiltering: boolean, buttonX: number, buttonY: number, centerX: number, centerY: number, buttonWidth: number): void;
    isFocused(): boolean;
    isMouseOver(mouseX: number, mouseY: number): boolean;
    isVisible(): boolean;
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
    setVisible(visible: boolean): void;
    shouldTakeFocusAfterInteraction(): boolean;
}