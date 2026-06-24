import type { RealmsServer } from '../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsWorldSlotButton$State } from '../../../../com/mojang/realmsclient/gui/RealmsWorldSlotButton$State.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { Button$Builder } from '../../../../net/minecraft/client/gui/components/Button$Builder.d.ts'
import type { Button$OnPress } from '../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { StringWidget } from '../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { SoundManager } from '../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class RealmsWorldSlotButton extends Button {
    static BIG_WIDTH: number;
    static DEFAULT_HEIGHT: number;
    static DEFAULT_SPACING: number;
    static DEFAULT_WIDTH: number;
    static DEFAULT_WORLD_SLOT_1: Identifier;
    static DEFAULT_WORLD_SLOT_2: Identifier;
    static DEFAULT_WORLD_SLOT_3: Identifier;
    static EMPTY_SLOT_LOCATION: Identifier;
    static SMALL_WIDTH: number;
    static builder(parammessage: Component, paramonPress: Button$OnPress): Button$Builder;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(configureWorldScreen: RealmsConfigureWorldScreen, x: number, y: number, width: number, height: number, slotIndex: number, serverData: RealmsServer, onPress: Button$OnPress)
    // private configureWorldScreen: RealmsConfigureWorldScreen;
    // private slotIndex: number;
    // private slotNameWidget: StringWidget;
    readonly state: RealmsWorldSlotButton$State;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractTooltipForNextRenderPass(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    getState(): RealmsWorldSlotButton$State;
    isActive(): boolean;
    setServerData(serverData: RealmsServer): RealmsWorldSlotButton$State;
    // private setTooltipAndNarration(state: RealmsWorldSlotButton$State, minigameName: string): void;
    updateSlotState(serverData: RealmsServer): void;
}