import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class VfpCompatibility1_8 extends Enum<VfpCompatibility1_8> {
    static INSTANCE: VfpCompatibility1_8;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VfpCompatibility1_8;
    static values(): VfpCompatibility1_8[];
    private constructor()
    sendPlayerInput(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
    sendSignUpdate(arg0: BlockPos, arg1: string[]): void;
    // private writePacket(arg0: ServerboundPacketType, arg1: (param0: PacketWrapper) => void): void;
    name(): "INSTANCE";
}