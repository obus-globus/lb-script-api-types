import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { MenuProvider } from '../../../../../../net/minecraft/world/MenuProvider.d.ts'
export interface ExtendedMenuProvider<D extends Object | number | string | boolean> extends Object, MenuProvider{
    getScreenOpeningData(arg0: ServerPlayer): D;
}