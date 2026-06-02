import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCBundlePolicy extends Enum<RTCBundlePolicy> {
    static BALANCED: RTCBundlePolicy;
    static MAX_BUNDLE: RTCBundlePolicy;
    static MAX_COMPAT: RTCBundlePolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCBundlePolicy;
    static values(): (Object | null)[];
    private constructor()
    name(): "BALANCED" | "MAX_BUNDLE" | "MAX_COMPAT";
}