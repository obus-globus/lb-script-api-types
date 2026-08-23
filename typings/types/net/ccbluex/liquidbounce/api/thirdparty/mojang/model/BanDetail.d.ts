import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BanDetail extends Record {
    constructor(banId: string, expires: string | null, reason: string | null, reasonMessage: string | null)
    // private banId: string;
    /*not mapped: */ banId(): string;
    // private expires: string | null;
    /*not mapped: */ expires(): string | null;
    // private reason: string | null;
    /*not mapped: */ reason(): string | null;
    // private reasonMessage: string | null;
    /*not mapped: */ reasonMessage(): string | null;
    component1(): string;
    component2(): string | null;
    component3(): string | null;
    component4(): string | null;
    copy(banId: string, expires: string | null, reason: string | null, reasonMessage: string | null): BanDetail;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}