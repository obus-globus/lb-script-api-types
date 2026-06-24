import type { PresenceStatus } from '../../../../../com/mojang/authlib/yggdrasil/response/PresenceStatus.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PresenceRequest extends Record {
    constructor(status: PresenceStatus)
    // private status: PresenceStatus;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    status(): PresenceStatus;
    toString(): string;
}