import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CloneCommands$Mode extends Enum<CloneCommands$Mode> {
    static FORCE: CloneCommands$Mode;
    static MOVE: CloneCommands$Mode;
    static NORMAL: CloneCommands$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CloneCommands$Mode;
    static values(): (Object | null)[];
    private constructor(canOverlap: boolean)
    // private canOverlap: boolean;
    canOverlap(): boolean;
    name(): "FORCE" | "MOVE" | "NORMAL";
}