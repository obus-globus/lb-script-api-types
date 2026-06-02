import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ServerData } from '../../../../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
export interface MixinServerListAccessor extends Object{
    liquid_bounce$getServerList(): ServerData[];
}