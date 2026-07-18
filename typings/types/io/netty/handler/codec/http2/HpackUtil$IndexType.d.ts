import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HpackUtil$IndexType extends Enum<HpackUtil$IndexType> {
    static INCREMENTAL: HpackUtil$IndexType;
    static NEVER: HpackUtil$IndexType;
    static NONE: HpackUtil$IndexType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HpackUtil$IndexType;
    static values(): HpackUtil$IndexType[];
    private constructor()
    name(): "INCREMENTAL" | "NONE" | "NEVER";
}