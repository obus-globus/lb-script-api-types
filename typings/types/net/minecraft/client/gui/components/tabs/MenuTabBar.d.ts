import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { TabButton } from '../../../../../../net/minecraft/client/gui/components/TabButton.d.ts'
import type { MenuTabBar$Builder } from '../../../../../../net/minecraft/client/gui/components/tabs/MenuTabBar$Builder.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { TabNavigationBar } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar.d.ts'
import type { TabNavigationBar$Builder } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar$Builder.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class MenuTabBar extends TabNavigationBar {
    static SCROLLBAR_WIDTH: number;
    static builder(paramtabManager: TabManager, paramwidth: number): MenuTabBar$Builder;
    static builder(paramtabManager: TabManager, paramx: number, paramy: number, paramwidth: number, paramheight: number): TabNavigationBar$Builder;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, tabManager: TabManager, tabButtons: TabButton[], tabs: Tab[])
    arrangeElements(width: number): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
}