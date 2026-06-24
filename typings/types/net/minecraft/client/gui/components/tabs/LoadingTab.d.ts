import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { Layout } from '../../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class LoadingTab extends Object implements Tab {
    constructor(font: Font, title: Component, loadingTitle: Component)
    readonly layout: LinearLayout;
    // private loadingTitle: Component;
    // private title: Component;
    doLayout(screenRectangle: ScreenRectangle): void;
    getLayout(): Layout;
    getTabExtraNarration(): Component;
    getTabTitle(): Component;
    visitChildren(childrenConsumer: (param0: AbstractWidget) => void): void;
}