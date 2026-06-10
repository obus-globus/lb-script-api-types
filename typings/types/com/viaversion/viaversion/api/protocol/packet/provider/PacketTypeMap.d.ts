import type { PacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface PacketTypeMap<P extends PacketType> extends Object{
    typeById(arg0: number): P;
    typeByName(arg0: string): P;
    types(): P[];
}