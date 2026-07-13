import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntitlementItem } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/EntitlementItem.d.ts'
export class EntitlementsResponse extends Record {
    constructor(items: EntitlementItem[], signature: string | null, keyId: string | null)
    // private items: EntitlementItem[];
    /*not mapped: */ items(): EntitlementItem[];
    // private keyId: string | null;
    /*not mapped: */ keyId(): string | null;
    // private signature: string | null;
    /*not mapped: */ signature(): string | null;
    component1(): EntitlementItem[];
    component2(): string | null;
    component3(): string | null;
    copy(items: EntitlementItem[], signature: string | null, keyId: string | null): EntitlementsResponse;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}