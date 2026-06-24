import type { RealmsServer } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { Subscription } from '../../../../../../com/mojang/realmsclient/dto/Subscription.d.ts'
import type { RealmsConfigurationTab } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigurationTab.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { FocusableTextWidget } from '../../../../../../net/minecraft/client/gui/components/FocusableTextWidget.d.ts'
import type { GridLayoutTab } from '../../../../../../net/minecraft/client/gui/components/tabs/GridLayoutTab.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsSubscriptionTab extends GridLayoutTab implements RealmsConfigurationTab {
    static TITLE: Component;
    constructor(configurationScreen: RealmsConfigureWorldScreen, minecraft: Minecraft, serverData: RealmsServer, subscription: Subscription)
    // private configurationScreen: RealmsConfigureWorldScreen;
    // private daysLeft: Component;
    // private deleteButton: Button;
    // private minecraft: Minecraft;
    // private serverData: RealmsServer;
    // private startDate: Component;
    // private subscriptionInfo: FocusableTextWidget;
    // private daysLeftPresentation(daysLeft: number): Component;
    // private deleteRealm(): void;
    getTabExtraNarration(): Component;
    onDeselected(serverData: RealmsServer): void;
    onSelected(serverData: RealmsServer): void;
    updateData(serverData: RealmsServer): void;
}