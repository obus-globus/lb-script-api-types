import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ReflectionAccessFilter$FilterResult extends Enum<ReflectionAccessFilter$FilterResult> {
    static ALLOW: ReflectionAccessFilter$FilterResult;
    static BLOCK_ALL: ReflectionAccessFilter$FilterResult;
    static BLOCK_INACCESSIBLE: ReflectionAccessFilter$FilterResult;
    static INDECISIVE: ReflectionAccessFilter$FilterResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ReflectionAccessFilter$FilterResult;
    static values(): ReflectionAccessFilter$FilterResult[];
    private constructor()
    name(): "ALLOW" | "INDECISIVE" | "BLOCK_INACCESSIBLE" | "BLOCK_ALL";
}