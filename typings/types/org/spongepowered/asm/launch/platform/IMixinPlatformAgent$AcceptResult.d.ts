import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class IMixinPlatformAgent$AcceptResult extends Enum<IMixinPlatformAgent$AcceptResult> {
    static ACCEPTED: IMixinPlatformAgent$AcceptResult;
    static INVALID: IMixinPlatformAgent$AcceptResult;
    static REJECTED: IMixinPlatformAgent$AcceptResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IMixinPlatformAgent$AcceptResult;
    static values(): IMixinPlatformAgent$AcceptResult[];
    private constructor()
    name(): "ACCEPTED" | "REJECTED" | "INVALID";
}