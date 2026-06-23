import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { RegistrationBuilder } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationBuilder.d.ts'
import type { RegistrationBuilder$RangesBuilder } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationBuilder$RangesBuilder.d.ts'
import type { RegistrationBuilder$TypedRegistrationAction } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationBuilder$TypedRegistrationAction.d.ts'
import type { RegistrationContext } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationContext.d.ts'
import type { SharedRegistrations$RegistrationAction } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/SharedRegistrations$RegistrationAction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegistrationBuilder$TypedRangesBuilder<CU extends ClientboundPacketType, SU extends ServerboundPacketType, R extends unknown> extends RegistrationBuilder$RangesBuilder<CU, SU> {
    private constructor(null_: RegistrationBuilder$TypedRangesBuilder<CU, SU, R>, arg2: ProtocolVersion)
    // private adapter: (param0: RegistrationContext<CU, SU>) => R;
    since(arg0: (param0: RegistrationContext<CU, SU>, param1: R) => void): RegistrationBuilder$TypedRangesBuilder<CU, SU, R>;
    since(arg0: (param0: RegistrationContext<CU, SU>) => void): RegistrationBuilder;
    to(arg0: ProtocolVersion, arg1: (param0: RegistrationContext<CU, SU>, param1: R) => void): RegistrationBuilder$TypedRangesBuilder<CU, SU, R>;
    to(arg0: ProtocolVersion, arg1: (param0: RegistrationContext<CU, SU>) => void): RegistrationBuilder$RangesBuilder<CU, SU>;
    // private wrapAction(arg0: (param0: RegistrationContext<CU, SU>, param1: R) => void): (param0: RegistrationContext<CU, SU>) => void;
}