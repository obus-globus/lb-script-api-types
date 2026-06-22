import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ScreenAddition } from '../../../../../net/ccbluex/liquidbounce/additions/ScreenAddition.d.ts'
import type { Event } from '../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ScreenExtensions } from '../../../../../net/fabricmc/fabric/impl/client/screen/ScreenExtensions.d.ts'
import type { ScreenAccessor } from '../../../../../net/fabricmc/fabric/mixin/screen/ScreenAccessor.d.ts'
import type { CrashReport } from '../../../../../net/minecraft/CrashReport.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { NarratorStatus } from '../../../../../net/minecraft/client/NarratorStatus.d.ts'
import type { ComponentPath } from '../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { CycleButton } from '../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { Renderable } from '../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { AbstractContainerEventHandler } from '../../../../../net/minecraft/client/gui/components/events/AbstractContainerEventHandler.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { ScreenNarrationCollector } from '../../../../../net/minecraft/client/gui/narration/ScreenNarrationCollector.d.ts'
import type { FocusNavigationEvent$ArrowNavigation } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent$ArrowNavigation.d.ts'
import type { FocusNavigationEvent$TabNavigation } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent$TabNavigation.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Music } from '../../../../../net/minecraft/sounds/Music.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class Screen extends AbstractContainerEventHandler implements ScreenAddition, ScreenExtensions, ScreenAccessor, Renderable {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getExtensions(paramarg0: Screen): ScreenExtensions;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(minecraft: Minecraft, font: Font, title: Component)
    constructor(title: Component)
    // private afterBackgroundEvent: Event<Object>;
    // private afterKeyPressEvent: Event<Object>;
    // private afterKeyReleaseEvent: Event<Object>;
    // private afterMouseClickEvent: Event<Object>;
    // private afterMouseDragEvent: Event<Object>;
    // private afterMouseReleaseEvent: Event<Object>;
    // private afterMouseScrollEvent: Event<Object>;
    // private afterRenderEvent: Event<Object>;
    // private afterTickEvent: Event<Object>;
    // private allowKeyPressEvent: Event<Object>;
    // private allowKeyReleaseEvent: Event<Object>;
    // private allowMouseClickEvent: Event<Object>;
    // private allowMouseDragEvent: Event<Object>;
    // private allowMouseReleaseEvent: Event<Object>;
    // private allowMouseScrollEvent: Event<Object>;
    // private beforeKeyPressEvent: Event<Object>;
    // private beforeKeyReleaseEvent: Event<Object>;
    // private beforeMouseClickEvent: Event<Object>;
    // private beforeMouseDragEvent: Event<Object>;
    // private beforeMouseReleaseEvent: Event<Object>;
    // private beforeMouseScrollEvent: Event<Object>;
    // private beforeRenderEvent: Event<Object>;
    // private beforeTickEvent: Event<Object>;
    // private children: GuiEventListener[];
    // private fabricButtons: (Object | null)[];
    readonly font: Font;
    height: number;
    // private initialized: boolean;
    // private lastNarratable: NarratableEntry;
    // private minecraft: Minecraft;
    // private narratables: NarratableEntry[];
    // private narrationState: ScreenNarrationCollector;
    // private narrationSuppressTime: number;
    // private narratorButton: CycleButton<NarratorStatus>;
    // private nextNarrationTime: number;
    // private removeEvent: Event<Object>;
    // private renderables: Renderable[];
    // private screenExecutor: Executor;
    readonly title: Component;
    width: number;
    addRenderableOnly<T extends Renderable>(renderable: T): T;
    addRenderableWidget<T extends GuiEventListener & Renderable & NarratableEntry>(widget: T): T;
    addWidget<T extends GuiEventListener & NarratableEntry>(widget: T): T;
    added(): void;
    // private afterInit(arg0: number, arg1: number): void;
    afterKeyboardAction(): void;
    afterMouseAction(): void;
    afterMouseMove(): void;
    // private beforeInit(arg0: number, arg1: number): void;
    canInterruptWithAnotherScreen(): boolean;
    changeFocus(componentPath: ComponentPath): void;
    children(): GuiEventListener[];
    clearFocus(): void;
    clearWidgets(): void;
    // private createArrowEvent(direction: ScreenDirection): FocusNavigationEvent$ArrowNavigation;
    // private createTabEvent(forward: boolean): FocusNavigationEvent$TabNavigation;
    // private ensureEventsAreInitialized(arg0: Event<Object>): Event<Object>;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractBlurredBackground(graphics: GuiGraphicsExtractor): void;
    extractMenuBackground(graphics: GuiGraphicsExtractor): void;
    extractMenuBackground(graphics: GuiGraphicsExtractor, x: number, y: number, width: number, height: number): void;
    extractPanorama(graphics: GuiGraphicsExtractor, a: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractRenderStateWithTooltipAndSubtitles(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractTransparentBackground(graphics: GuiGraphicsExtractor): void;
    fabric_getAfterBackgroundEvent(): Event<Object>;
    fabric_getAfterKeyPressEvent(): Event<Object>;
    fabric_getAfterKeyReleaseEvent(): Event<Object>;
    fabric_getAfterMouseClickEvent(): Event<Object>;
    fabric_getAfterMouseDragEvent(): Event<Object>;
    fabric_getAfterMouseReleaseEvent(): Event<Object>;
    fabric_getAfterMouseScrollEvent(): Event<Object>;
    fabric_getAfterRenderEvent(): Event<Object>;
    fabric_getAfterTickEvent(): Event<Object>;
    fabric_getAllowKeyPressEvent(): Event<Object>;
    fabric_getAllowKeyReleaseEvent(): Event<Object>;
    fabric_getAllowMouseClickEvent(): Event<Object>;
    fabric_getAllowMouseDragEvent(): Event<Object>;
    fabric_getAllowMouseReleaseEvent(): Event<Object>;
    fabric_getAllowMouseScrollEvent(): Event<Object>;
    fabric_getBeforeKeyPressEvent(): Event<Object>;
    fabric_getBeforeKeyReleaseEvent(): Event<Object>;
    fabric_getBeforeMouseClickEvent(): Event<Object>;
    fabric_getBeforeMouseDragEvent(): Event<Object>;
    fabric_getBeforeMouseReleaseEvent(): Event<Object>;
    fabric_getBeforeMouseScrollEvent(): Event<Object>;
    fabric_getBeforeRenderEvent(): Event<Object>;
    fabric_getBeforeTickEvent(): Event<Object>;
    fabric_getButtons(): (Object | null)[];
    fabric_getRemoveEvent(): Event<Object>;
    fadeWidgets(widgetFade: number): void;
    fillCrashDetails(report: CrashReport): void;
    getBackgroundMusic(): Music;
    getClient(): Minecraft;
    getFont(): Font;
    getNarrationMessage(): Component;
    getRectangle(): ScreenRectangle;
    getTitle(): Component;
    getUsageNarration(): Component;
    handleDelayedNarration(): void;
    init(): void;
    init(width: number, height: number): void;
    insertText(text: string, replace: boolean): void;
    isAllowedInPortal(): boolean;
    isInGameUi(): boolean;
    isMouseOver(mouseX: number, mouseY: number): boolean;
    isPauseScreen(): boolean;
    isValidCharacterForName(currentName: string, newChar: number, cursorPos: number): boolean;
    keyPressed(event: KeyEvent): boolean;
    liquidbounce$screenInitialized(): boolean;
    onClose(): void;
    onFilesDrop(files: Path[][]): void;
    panoramaShouldSpin(): boolean;
    rebuildWidgets(): void;
    removeWidget(widget: GuiEventListener): void;
    removed(): void;
    repositionElements(): void;
    resize(width: number, height: number): void;
    // private runNarration(onlyChanged: boolean): void;
    // private scheduleNarration(delay: number, ignoreSuppression: boolean): void;
    setInitialFocus(): void;
    setInitialFocus(target: GuiEventListener): void;
    // private setNarrationSuppressTime(narrationSuppressTime: number): void;
    shouldCloseOnEsc(): boolean;
    shouldNarrateNavigation(): boolean;
    // private shouldRunNarration(): boolean;
    showsActiveEffects(): boolean;
    // private suppressNarration(duration: number): void;
    tick(): void;
    triggerImmediateNarration(onlyChanged: boolean): void;
    updateNarratedWidget(output: NarrationElementOutput): void;
    updateNarrationState(output: NarrationElementOutput): void;
    updateNarratorStatus(wasDisabled: boolean): void;
}