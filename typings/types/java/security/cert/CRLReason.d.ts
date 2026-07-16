import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CRLReason extends Enum<CRLReason> {
    static AA_COMPROMISE: CRLReason;
    static AFFILIATION_CHANGED: CRLReason;
    static CA_COMPROMISE: CRLReason;
    static CERTIFICATE_HOLD: CRLReason;
    static CESSATION_OF_OPERATION: CRLReason;
    static KEY_COMPROMISE: CRLReason;
    static PRIVILEGE_WITHDRAWN: CRLReason;
    static REMOVE_FROM_CRL: CRLReason;
    static SUPERSEDED: CRLReason;
    static UNSPECIFIED: CRLReason;
    static UNUSED: CRLReason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CRLReason;
    static values(): CRLReason[];
    private constructor()
    name(): "UNSPECIFIED" | "KEY_COMPROMISE" | "CA_COMPROMISE" | "AFFILIATION_CHANGED" | "SUPERSEDED" | "CESSATION_OF_OPERATION" | "CERTIFICATE_HOLD" | "UNUSED" | "REMOVE_FROM_CRL" | "PRIVILEGE_WITHDRAWN" | "AA_COMPROMISE";
}