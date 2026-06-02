import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { FullChunkStatus } from '../../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
export class Visibility extends Enum<Visibility> {
    static HIDDEN: Visibility;
    static TICKING: Visibility;
    static TRACKED: Visibility;
    static fromFullChunkStatus(paramstatus: FullChunkStatus): Visibility;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Visibility;
    static values(): (Object | null)[];
    private constructor(accessible: boolean, ticking: boolean)
    readonly accessible: boolean;
    readonly ticking: boolean;
    isAccessible(): boolean;
    isTicking(): boolean;
    name(): "HIDDEN" | "TRACKED" | "TICKING";
}