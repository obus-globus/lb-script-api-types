import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PacketContext } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
export interface PacketContextProvider extends Object{
    getPacketContext(): PacketContext;
}