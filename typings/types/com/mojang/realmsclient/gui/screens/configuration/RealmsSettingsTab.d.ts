import type { RealmsRegion } from '../../../../../../com/mojang/realmsclient/dto/RealmsRegion.d.ts'
import type { RealmsServer } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RegionSelectionPreference } from '../../../../../../com/mojang/realmsclient/dto/RegionSelectionPreference.d.ts'
import type { ServiceQuality } from '../../../../../../com/mojang/realmsclient/dto/ServiceQuality.d.ts'
import type { RealmsConfigurationTab } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigurationTab.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { RealmsSettingsTab$RegionSelection } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsSettingsTab$RegionSelection.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { ImageWidget } from '../../../../../../net/minecraft/client/gui/components/ImageWidget.d.ts'
import type { StringWidget } from '../../../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { GridLayoutTab } from '../../../../../../net/minecraft/client/gui/components/tabs/GridLayoutTab.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsSettingsTab extends GridLayoutTab implements RealmsConfigurationTab {
    static TITLE: Component;
    constructor(configurationScreen: RealmsConfigureWorldScreen, minecraft: Minecraft, serverData: RealmsServer, regionServiceQuality: Map<RealmsRegion, ServiceQuality>)
    // private closeOpenButton: Button;
    // private configurationScreen: RealmsConfigureWorldScreen;
    // private descEdit: EditBox;
    // private minecraft: Minecraft;
    // private nameEdit: EditBox;
    // private preferredRegionSelection: RealmsSettingsTab$RegionSelection;
    // private regionServiceQuality: Map<RealmsRegion, ServiceQuality>;
    // private selectedRegionImageWidget: ImageWidget;
    // private selectedRegionStringWidget: StringWidget;
    // private serverData: RealmsServer;
    // private applyRegionPreferenceSelection(preference: RegionSelectionPreference, region: RealmsRegion): void;
    // private isRealmNameValid(): boolean;
    onDeselected(serverData: RealmsServer): void;
    onSelected(serverData: RealmsServer): void;
    // private openPreferenceSelector(): void;
    save(): void;
    updateData(serverData: RealmsServer): void;
    // private updateRegionPreferenceValues(): void;
}