import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CloneCommands$Mode extends Enum<CloneCommands$Mode> {
    static FORCE: CloneCommands$Mode;
    static MOVE: CloneCommands$Mode;
    static NORMAL: CloneCommands$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CloneCommands$Mode;
    static values(): CloneCommands$Mode[];
    private constructor(canOverlap: boolean)
    // private canOverlap: boolean;
    canOverlap(): boolean;
    name(): "FORCE" | "MOVE" | "NORMAL";
}