import type { BanDetails } from '../../../../../com/mojang/authlib/minecraft/BanDetails.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConfirmLinkScreen } from '../../../../../net/minecraft/client/gui/screens/ConfirmLinkScreen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class BanNoticeScreens extends Object {
    static NAME_BAN_TITLE: Component;
    static create(paramcallback: (param0: boolean) => void, parammultiplayerBanned: BanDetails): ConfirmLinkScreen;
    static createNameBan(paramname: string, paramonClose: () => void): ConfirmLinkScreen;
    static createSkinBan(paramonClose: () => void): ConfirmLinkScreen;
    constructor()
}