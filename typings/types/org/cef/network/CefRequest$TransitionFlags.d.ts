import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefRequest$TransitionFlags extends Enum<CefRequest$TransitionFlags> {
    static TT_BLOCKED_FLAG: CefRequest$TransitionFlags;
    static TT_CHAIN_END_FLAG: CefRequest$TransitionFlags;
    static TT_CHAIN_START_FLAG: CefRequest$TransitionFlags;
    static TT_CLIENT_REDIRECT_FLAG: CefRequest$TransitionFlags;
    static TT_FORWARD_BACK_FLAG: CefRequest$TransitionFlags;
    static TT_SERVER_REDIRECT_FLAG: CefRequest$TransitionFlags;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefRequest$TransitionFlags;
    static values(): CefRequest$TransitionFlags[];
    private constructor(arg2: number)
    // private flag: number;
    getValue(): number;
    name(): "TT_BLOCKED_FLAG" | "TT_FORWARD_BACK_FLAG" | "TT_CHAIN_START_FLAG" | "TT_CHAIN_END_FLAG" | "TT_CLIENT_REDIRECT_FLAG" | "TT_SERVER_REDIRECT_FLAG";
}