import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RemovalCause extends Enum<RemovalCause> {
    static COLLECTED: RemovalCause;
    static EXPIRED: RemovalCause;
    static EXPLICIT: RemovalCause;
    static REPLACED: RemovalCause;
    static SIZE: RemovalCause;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RemovalCause;
    static values(): (Object | null)[];
    constructor(arg2: RemovalCause)
    wasEvicted(): boolean;
    name(): "EXPLICIT" | "REPLACED" | "COLLECTED" | "EXPIRED" | "SIZE";
}