import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class DropMode extends Enum<DropMode> {
    static INSERT: DropMode;
    static INSERT_COLS: DropMode;
    static INSERT_ROWS: DropMode;
    static ON: DropMode;
    static ON_OR_INSERT: DropMode;
    static ON_OR_INSERT_COLS: DropMode;
    static ON_OR_INSERT_ROWS: DropMode;
    static USE_SELECTION: DropMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DropMode;
    static values(): DropMode[];
    private constructor()
    name(): "USE_SELECTION" | "ON" | "INSERT" | "INSERT_ROWS" | "INSERT_COLS" | "ON_OR_INSERT" | "ON_OR_INSERT_ROWS" | "ON_OR_INSERT_COLS";
}