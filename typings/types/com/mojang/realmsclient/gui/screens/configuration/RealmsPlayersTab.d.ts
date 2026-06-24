import type { RealmsServer } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsConfigurationTab } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigurationTab.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { RealmsPlayersTab$InvitedObjectSelectionList } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsPlayersTab$InvitedObjectSelectionList.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GridLayoutTab } from '../../../../../../net/minecraft/client/gui/components/tabs/GridLayoutTab.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsPlayersTab extends GridLayoutTab implements RealmsConfigurationTab {
    static TITLE: Component;
    constructor(configurationScreen: RealmsConfigureWorldScreen, minecraft: Minecraft, serverData: RealmsServer)
    // private configurationScreen: RealmsConfigureWorldScreen;
    // private font: Font;
    // private invitedList: RealmsPlayersTab$InvitedObjectSelectionList;
    // private minecraft: Minecraft;
    // private serverData: RealmsServer;
    calculateListHeight(): number;
    doLayout(screenRectangle: ScreenRectangle): void;
    onDeselected(serverData: RealmsServer): void;
    onSelected(serverData: RealmsServer): void;
    updateData(serverData: RealmsServer): void;
}