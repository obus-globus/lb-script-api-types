import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { RegistrationContext } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SharedRegistrations$RegistrationAction<CU extends ClientboundPacketType, SU extends ServerboundPacketType> extends Object{
    accept(arg0: RegistrationContext<CU, SU>): void;
}