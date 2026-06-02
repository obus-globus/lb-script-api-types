import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReportedEntity extends Record {
    constructor(profileId: UUID)
    // private profileId: UUID;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    profileId(): UUID;
    toString(): string;
}