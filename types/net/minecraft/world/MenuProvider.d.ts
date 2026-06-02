import type { Object } from '../../../java/lang/Object.d.ts'
import type { FabricMenuProvider } from '../../../net/fabricmc/fabric/api/menu/v1/FabricMenuProvider.d.ts'
import type { MenuProviderMixin } from '../../../net/fabricmc/fabric/mixin/menu/MenuProviderMixin.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { MenuConstructor } from '../../../net/minecraft/world/inventory/MenuConstructor.d.ts'
export interface MenuProvider extends Object, FabricMenuProvider, MenuProviderMixin, MenuConstructor{
    getDisplayName(): Component;
    shouldCloseCurrentScreen(): boolean;
}