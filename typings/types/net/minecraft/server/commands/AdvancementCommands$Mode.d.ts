import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AdvancementCommands$Mode extends Enum<AdvancementCommands$Mode> {
    static EVERYTHING: AdvancementCommands$Mode;
    static FROM: AdvancementCommands$Mode;
    static ONLY: AdvancementCommands$Mode;
    static THROUGH: AdvancementCommands$Mode;
    static UNTIL: AdvancementCommands$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AdvancementCommands$Mode;
    static values(): AdvancementCommands$Mode[];
    private constructor(parents: boolean, children: boolean)
    // private children: boolean;
    // private parents: boolean;
    name(): "ONLY" | "THROUGH" | "FROM" | "UNTIL" | "EVERYTHING";
}