import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { VersionType } from '../../../../../com/viaversion/viaversion/api/protocol/version/VersionType.d.ts'
import type { RegistrationBuilder } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationBuilder.d.ts'
import type { VersionedTemplateGroup } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/VersionedTemplateGroup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SharedRegistrations extends Object {
    static create(): SharedRegistrations;
    static defaultRegistrations(): SharedRegistrations;
    constructor()
    // private versionedTemplates: { [key in VersionType]: VersionedTemplateGroup[] };
    applyMatching(arg0: AbstractProtocol<any, any, any, any>): void;
    register(arg0: VersionType, arg1: VersionedTemplateGroup[]): void;
    registrations(): RegistrationBuilder;
}