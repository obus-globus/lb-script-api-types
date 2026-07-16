import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { FullChunkStatus } from '../../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
export class Visibility extends Enum<Visibility> {
    static HIDDEN: Visibility;
    static TICKING: Visibility;
    static TRACKED: Visibility;
    static fromFullChunkStatus(paramstatus: FullChunkStatus): Visibility;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Visibility;
    static values(): Visibility[];
    private constructor(accessible: boolean, ticking: boolean)
    readonly accessible: boolean;
    readonly ticking: boolean;
    isAccessible(): boolean;
    isTicking(): boolean;
    name(): "HIDDEN" | "TRACKED" | "TICKING";
}