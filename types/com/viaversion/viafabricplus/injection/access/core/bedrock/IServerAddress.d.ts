import type { NetherNetAddress } from '../../../../../../../dev/kastle/netty/channel/nethernet/config/NetherNetAddress.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IServerAddress extends Object{
    viaFabricPlus$getNetherNetAddress(): NetherNetAddress;
    viaFabricPlus$setNetherNetAddress(arg0: NetherNetAddress): void;
}