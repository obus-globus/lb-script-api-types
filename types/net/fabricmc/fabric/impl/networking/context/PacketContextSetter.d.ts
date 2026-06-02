import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketContext } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
export interface PacketContextSetter extends Object{
    fabric_setPacketContext(arg0: PacketContext): void;
}