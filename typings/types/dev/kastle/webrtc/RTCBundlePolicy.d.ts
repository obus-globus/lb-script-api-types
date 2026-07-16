import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCBundlePolicy extends Enum<RTCBundlePolicy> {
    static BALANCED: RTCBundlePolicy;
    static MAX_BUNDLE: RTCBundlePolicy;
    static MAX_COMPAT: RTCBundlePolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RTCBundlePolicy;
    static values(): RTCBundlePolicy[];
    private constructor()
    name(): "BALANCED" | "MAX_BUNDLE" | "MAX_COMPAT";
}