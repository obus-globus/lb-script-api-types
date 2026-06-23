import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { MenuProvider } from '../../../../../../net/minecraft/world/MenuProvider.d.ts'
export interface ExtendedMenuProvider<D extends unknown> extends Object, MenuProvider{
    getDisplayName(): Component;
    getScreenOpeningData(arg0: ServerPlayer): D;
}