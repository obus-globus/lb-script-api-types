import type { RealmsClient } from '../../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { GameConfig$QuickPlayVariant } from '../../../../net/minecraft/client/main/GameConfig$QuickPlayVariant.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class QuickPlay extends Object {
    static ERROR_TITLE: Component;
    static connect(paramminecraft: Minecraft, paramquickPlayVariant: GameConfig$QuickPlayVariant, paramrealmsClient: RealmsClient): void;
    constructor()
}