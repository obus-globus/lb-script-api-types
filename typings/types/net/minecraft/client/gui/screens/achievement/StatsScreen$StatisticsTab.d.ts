import type { AbstractSelectionList } from '../../../../../../net/minecraft/client/gui/components/AbstractSelectionList.d.ts'
import type { GridLayoutTab } from '../../../../../../net/minecraft/client/gui/components/tabs/GridLayoutTab.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { StatsScreen } from '../../../../../../net/minecraft/client/gui/screens/achievement/StatsScreen.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class StatsScreen$StatisticsTab extends GridLayoutTab {
    constructor(null_: StatsScreen, title: Component, list: AbstractSelectionList<any>)
    // private list: AbstractSelectionList<any>;
    doLayout(screenRectangle: ScreenRectangle): void;
}