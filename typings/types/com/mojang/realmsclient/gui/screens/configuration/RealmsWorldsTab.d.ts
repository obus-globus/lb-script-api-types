import type { RealmsServer } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { WorldTemplate } from '../../../../../../com/mojang/realmsclient/dto/WorldTemplate.d.ts'
import type { RealmsWorldSlotButton } from '../../../../../../com/mojang/realmsclient/gui/RealmsWorldSlotButton.d.ts'
import type { RealmsConfigurationTab } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigurationTab.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { GridLayoutTab } from '../../../../../../net/minecraft/client/gui/components/tabs/GridLayoutTab.d.ts'
export class RealmsWorldsTab extends GridLayoutTab implements RealmsConfigurationTab {
    constructor(configurationScreen: RealmsConfigureWorldScreen, minecraft: Minecraft, serverData: RealmsServer)
    // private backupButton: Button;
    // private configurationScreen: RealmsConfigureWorldScreen;
    // private minecraft: Minecraft;
    // private optionsButton: Button;
    // private resetWorldButton: Button;
    // private serverData: RealmsServer;
    // private slotButtonList: RealmsWorldSlotButton[];
    // private createSlotButton(i: number): RealmsWorldSlotButton;
    // private isMinigame(): boolean;
    onDeselected(serverData: RealmsServer): void;
    onSelected(serverData: RealmsServer): void;
    // private resetButtonPressed(): void;
    // private switchToEmptySlot(selectedSlot: number, serverData: RealmsServer): void;
    // private switchToFullSlot(selectedSlot: number, serverData: RealmsServer): void;
    // private switchToMinigame(): void;
    // private templateSelectionCallback(worldTemplate: WorldTemplate): void;
    updateData(serverData: RealmsServer): void;
}