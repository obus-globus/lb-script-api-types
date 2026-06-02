import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StatelessProtocol } from '../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
export abstract class StatelessTransitionProtocol<CU extends ClientboundPacketType, CM extends ClientboundPacketType, SM extends ServerboundPacketType, SU extends ServerboundPacketType> extends StatelessProtocol<CU, CM, SM, SU> {
    constructor(arg0: Class<CU>, arg1: Class<CM>, arg2: Class<SM>, arg3: Class<SU>)
    registerClientboundTransition(arg0: CU, arg1: Object[]): void;
    registerServerboundTransition(arg0: ServerboundPacketType, arg1: SM, arg2: (param0: PacketWrapper) => void): void;
}