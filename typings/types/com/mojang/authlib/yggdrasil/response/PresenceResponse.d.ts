import type { PresenceStatusDto } from '../../../../../com/mojang/authlib/yggdrasil/response/PresenceStatusDto.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PresenceResponse extends Record {
    static empty(): PresenceResponse;
    constructor(presence: PresenceStatusDto[])
    // private presence: PresenceStatusDto[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    presence(): PresenceStatusDto[];
    toString(): string;
}