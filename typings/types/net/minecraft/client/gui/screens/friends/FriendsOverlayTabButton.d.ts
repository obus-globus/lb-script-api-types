import type { ActiveTextCollector } from '../../../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { TabButton } from '../../../../../../net/minecraft/client/gui/components/TabButton.d.ts'
import type { WidgetSprites } from '../../../../../../net/minecraft/client/gui/components/WidgetSprites.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class FriendsOverlayTabButton extends TabButton {
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(tabManager: TabManager, tab: Tab, width: number, height: number)
    // private sprites: WidgetSprites;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private renderFocusUnderline(graphics: GuiGraphicsExtractor, font: Font, color: number): void;
    // private renderLabel(output: ActiveTextCollector): void;
}