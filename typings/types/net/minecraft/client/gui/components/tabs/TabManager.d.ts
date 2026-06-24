import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
export class TabManager extends Object {
    constructor(addWidget: (param0: AbstractWidget) => void, removeWidget: (param0: AbstractWidget) => void)
    constructor(addWidget: (param0: AbstractWidget) => void, removeWidget: (param0: AbstractWidget) => void, onSelected: (param0: Tab) => void, onDeselected: (param0: Tab) => void)
    // private addWidget: (param0: AbstractWidget) => void;
    readonly currentTab: Tab;
    // private onDeselected: (param0: Tab) => void;
    // private onSelected: (param0: Tab) => void;
    // private removeWidget: (param0: AbstractWidget) => void;
    readonly tabArea: ScreenRectangle;
    getCurrentTab(): Tab;
    setCurrentTab(tab: Tab, playSound: boolean): void;
    setCurrentTab(tab: Tab, playSound: boolean, addWidget: boolean): void;
    setTabArea(tabArea: ScreenRectangle): void;
}