import type { TabButton } from '../../../../../../net/minecraft/client/gui/components/TabButton.d.ts'
import type { MenuTabBar } from '../../../../../../net/minecraft/client/gui/components/tabs/MenuTabBar.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { TabNavigationBar$Builder } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar$Builder.d.ts'
export class MenuTabBar$Builder extends TabNavigationBar$Builder {
    private constructor(tabManager: TabManager, width: number)
    addTab(button: TabButton, tab: Tab): TabNavigationBar$Builder;
    addTab(tab: Tab): MenuTabBar$Builder;
    addTabs(...tabs: Tab[]): MenuTabBar$Builder;
    build(): MenuTabBar;
}