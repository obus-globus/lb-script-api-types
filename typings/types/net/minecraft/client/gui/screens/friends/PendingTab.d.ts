import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { LoadingDotsWidget } from '../../../../../../net/minecraft/client/gui/components/LoadingDotsWidget.d.ts'
import type { ScrollableLayout } from '../../../../../../net/minecraft/client/gui/components/ScrollableLayout.d.ts'
import type { Layout } from '../../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { AbstractFriendsTab } from '../../../../../../net/minecraft/client/gui/screens/friends/AbstractFriendsTab.d.ts'
import type { FriendsOverlayScreen } from '../../../../../../net/minecraft/client/gui/screens/friends/FriendsOverlayScreen.d.ts'
import type { IncomingEntry } from '../../../../../../net/minecraft/client/gui/screens/friends/IncomingEntry.d.ts'
import type { OutgoingEntry } from '../../../../../../net/minecraft/client/gui/screens/friends/OutgoingEntry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class PendingTab extends AbstractFriendsTab {
    constructor(minecraft: Minecraft, loadingDotsWidget: LoadingDotsWidget, screen: FriendsOverlayScreen, width: number, height: number)
    readonly layout: LinearLayout;
    // private loadingDotsWidget: LoadingDotsWidget;
    // private pendingScrollableContent: LinearLayout;
    // private screen: FriendsOverlayScreen;
    // private scrollableLayout: ScrollableLayout;
    doLayout(screenRectangle: ScreenRectangle): void;
    entriesContainer(): Layout;
    getLayout(): Layout;
    getTabExtraNarration(): Component;
    getTabTitle(): Component;
    rearrangeElements(): void;
    showEmpty(): void;
    showError(message: Component): void;
    showLoading(): void;
    updateEntries(incomingEntries: IncomingEntry[], outgoingEntries: OutgoingEntry[]): void;
    visitChildren(childrenConsumer: (param0: AbstractWidget) => void): void;
}