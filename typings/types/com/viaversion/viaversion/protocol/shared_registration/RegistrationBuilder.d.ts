import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { VersionType } from '../../../../../com/viaversion/viaversion/api/protocol/version/VersionType.d.ts'
import type { RegistrationBuilder$RangesBuilder } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationBuilder$RangesBuilder.d.ts'
import type { RegistrationBuilder$TypedRangesBuilder } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationBuilder$TypedRangesBuilder.d.ts'
import type { RegistrationContext } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationContext.d.ts'
import type { SharedRegistrations } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/SharedRegistrations.d.ts'
import type { SharedRegistrations$RegistrationAction } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/SharedRegistrations$RegistrationAction.d.ts'
import type { VersionedTemplateGroup } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/VersionedTemplateGroup.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegistrationBuilder extends Object {
    constructor(arg0: SharedRegistrations)
    // private groups: VersionedTemplateGroup[];
    // private registrations: SharedRegistrations;
    // private versionType: VersionType;
    // private checkVersionType(arg0: ProtocolVersion): void;
    range(arg0: ProtocolVersion, arg1: ProtocolVersion, arg2: (param0: RegistrationContext<ClientboundPacketType, ServerboundPacketType>) => void): RegistrationBuilder;
    ranges<CU extends ClientboundPacketType, SU extends ServerboundPacketType>(arg0: ProtocolVersion, arg1: (param0: RegistrationBuilder$RangesBuilder<CU, SU>) => void): RegistrationBuilder;
    ranges<CU extends ClientboundPacketType, SU extends ServerboundPacketType, R extends unknown>(arg0: (param0: RegistrationContext<CU, SU>) => R, arg1: ProtocolVersion, arg2: (param0: RegistrationBuilder$TypedRangesBuilder<CU, SU, R>) => void): RegistrationBuilder;
    register(): void;
    since(arg0: ProtocolVersion, arg1: (param0: RegistrationContext<ClientboundPacketType, ServerboundPacketType>) => void): RegistrationBuilder;
}