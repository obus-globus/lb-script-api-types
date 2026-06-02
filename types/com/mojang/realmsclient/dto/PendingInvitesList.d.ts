import type { PendingInvite } from '../../../../com/mojang/realmsclient/dto/PendingInvite.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PendingInvitesList extends Record {
    static parse(paramjson: string): PendingInvitesList;
    constructor(pendingInvites: PendingInvite[])
    // private pendingInvites: PendingInvite[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    pendingInvites(): PendingInvite[];
    toString(): string;
}