import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TabButton } from '../../../../../../net/minecraft/client/gui/components/TabButton.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { TabNavigationBar } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar.d.ts'
export class TabNavigationBar$Builder extends Object {
    constructor(tabManager: TabManager, x: number, y: number, width: number, height: number)
    // private height: number;
    // private tabButtons: TabButton[];
    // private tabManager: TabManager;
    // private tabs: Tab[];
    // private width: number;
    // private x: number;
    // private y: number;
    addTab(button: TabButton, tab: Tab): TabNavigationBar$Builder;
    build(): TabNavigationBar;
}