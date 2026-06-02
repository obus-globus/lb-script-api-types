import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefRequest$ReferrerPolicy extends Enum<CefRequest$ReferrerPolicy> {
    static REFERRER_POLICY_CLEAR_REFERRER_ON_TRANSITION_CROSS_ORIGIN: CefRequest$ReferrerPolicy;
    static REFERRER_POLICY_CLEAR_REFERRER_ON_TRANSITION_FROM_SECURE_TO_INSECURE: CefRequest$ReferrerPolicy;
    static REFERRER_POLICY_DEFAULT: CefRequest$ReferrerPolicy;
    static REFERRER_POLICY_NEVER_CLEAR_REFERRER: CefRequest$ReferrerPolicy;
    static REFERRER_POLICY_NO_REFERRER: CefRequest$ReferrerPolicy;
    static REFERRER_POLICY_NUM_VALUES: CefRequest$ReferrerPolicy;
    static REFERRER_POLICY_ORIGIN: CefRequest$ReferrerPolicy;
    static REFERRER_POLICY_ORIGIN_CLEAR_ON_TRANSITION_FROM_SECURE_TO_INSECURE: CefRequest$ReferrerPolicy;
    static REFERRER_POLICY_ORIGIN_ONLY_ON_TRANSITION_CROSS_ORIGIN: CefRequest$ReferrerPolicy;
    static REFERRER_POLICY_REDUCE_REFERRER_GRANULARITY_ON_TRANSITION_CROSS_ORIGIN: CefRequest$ReferrerPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CefRequest$ReferrerPolicy;
    static values(): (Object | null)[];
    private constructor()
    name(): "REFERRER_POLICY_DEFAULT" | "REFERRER_POLICY_CLEAR_REFERRER_ON_TRANSITION_FROM_SECURE_TO_INSECURE" | "REFERRER_POLICY_REDUCE_REFERRER_GRANULARITY_ON_TRANSITION_CROSS_ORIGIN" | "REFERRER_POLICY_ORIGIN_ONLY_ON_TRANSITION_CROSS_ORIGIN" | "REFERRER_POLICY_NEVER_CLEAR_REFERRER" | "REFERRER_POLICY_ORIGIN" | "REFERRER_POLICY_CLEAR_REFERRER_ON_TRANSITION_CROSS_ORIGIN" | "REFERRER_POLICY_ORIGIN_CLEAR_ON_TRANSITION_FROM_SECURE_TO_INSECURE" | "REFERRER_POLICY_NO_REFERRER" | "REFERRER_POLICY_NUM_VALUES";
}