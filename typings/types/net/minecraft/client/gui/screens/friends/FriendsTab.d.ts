import type { PresenceResponse } from '../../../../../../com/mojang/authlib/yggdrasil/response/PresenceResponse.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { LoadingDotsWidget } from '../../../../../../net/minecraft/client/gui/components/LoadingDotsWidget.d.ts'
import type { ScrollableLayout } from '../../../../../../net/minecraft/client/gui/components/ScrollableLayout.d.ts'
import type { FrameLayout } from '../../../../../../net/minecraft/client/gui/layouts/FrameLayout.d.ts'
import type { Layout } from '../../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { AbstractFriendsTab } from '../../../../../../net/minecraft/client/gui/screens/friends/AbstractFriendsTab.d.ts'
import type { AddFriendWidget } from '../../../../../../net/minecraft/client/gui/screens/friends/AddFriendWidget.d.ts'
import type { FriendEntry } from '../../../../../../net/minecraft/client/gui/screens/friends/FriendEntry.d.ts'
import type { FriendsOverlayScreen } from '../../../../../../net/minecraft/client/gui/screens/friends/FriendsOverlayScreen.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class FriendsTab extends AbstractFriendsTab {
    constructor(minecraft: Minecraft, loadingDotsWidget: LoadingDotsWidget, screen: FriendsOverlayScreen, width: number, height: number)
    // private addFriendWidget: AddFriendWidget;
    // private friendScrollableContent: LinearLayout;
    readonly layout: LinearLayout;
    // private loadingDotsWidget: LoadingDotsWidget;
    // private screen: FriendsOverlayScreen;
    // private scrollableLayout: ScrollableLayout;
    applyPresenceUpdate(latestPresence: PresenceResponse): void;
    // private createManageAccountFooter(): FrameLayout;
    doLayout(screenRectangle: ScreenRectangle): void;
    entriesContainer(): Layout;
    getLayout(): Layout;
    getTabExtraNarration(): Component;
    getTabTitle(): Component;
    // private onSendFriendRequestFinished(): void;
    rearrangeElements(): void;
    showEmpty(): void;
    showError(message: Component): void;
    showLoading(): void;
    updateEntries(friendEntries: FriendEntry[]): void;
    visitChildren(childrenConsumer: (param0: AbstractWidget) => void): void;
}