import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TruffleString$CompactionLevel extends Enum<TruffleString$CompactionLevel> {
    static S1: TruffleString$CompactionLevel;
    static S2: TruffleString$CompactionLevel;
    static S4: TruffleString$CompactionLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TruffleString$CompactionLevel;
    static values(): (Object | null)[];
    private constructor(bytes: number, log2: number)
    readonly bytes: number;
    readonly log2: number;
    getBytes(): number;
    getLog2(): number;
    getStride(): number;
    name(): "S1" | "S2" | "S4";
}