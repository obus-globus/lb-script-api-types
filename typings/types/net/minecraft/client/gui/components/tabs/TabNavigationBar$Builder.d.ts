import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { TabNavigationBar } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar.d.ts'
export class TabNavigationBar$Builder extends Object {
    private constructor(tabManager: TabManager, width: number)
    // private tabManager: TabManager;
    // private tabs: Tab[];
    // private width: number;
    addTabs(tabs: Tab[]): TabNavigationBar$Builder;
    build(): TabNavigationBar;
}