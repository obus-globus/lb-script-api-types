import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JoinInfo } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/JoinInfo.d.ts'
export class PresenceRequest extends Record {
    constructor(status: string, joinInfo: JoinInfo | null)
    // private joinInfo: JoinInfo | null;
    /*not mapped: */ joinInfo(): JoinInfo | null;
    // private status: string;
    /*not mapped: */ status(): string;
    component1(): string;
    component2(): JoinInfo | null;
    copy(status: string, joinInfo: JoinInfo | null): PresenceRequest;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}