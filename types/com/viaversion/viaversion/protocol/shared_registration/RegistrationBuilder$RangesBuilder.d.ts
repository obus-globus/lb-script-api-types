import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { RegistrationBuilder } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationBuilder.d.ts'
import type { SharedRegistrations$RegistrationAction } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/SharedRegistrations$RegistrationAction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegistrationBuilder$RangesBuilder<CU extends ClientboundPacketType, SU extends ServerboundPacketType> extends Object {
    private constructor(null_: RegistrationBuilder$RangesBuilder<CU, SU>, arg1: ProtocolVersion)
    // private completed: boolean;
    // private currentMin: ProtocolVersion;
    since(arg0: (param0: CU) => void): RegistrationBuilder;
    to(arg0: ProtocolVersion, arg1: (param0: CU) => void): RegistrationBuilder$RangesBuilder<CU, SU>;
}