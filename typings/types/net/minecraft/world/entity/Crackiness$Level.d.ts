import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Crackiness$Level extends Enum<Crackiness$Level> {
    static HIGH: Crackiness$Level;
    static LOW: Crackiness$Level;
    static MEDIUM: Crackiness$Level;
    static NONE: Crackiness$Level;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Crackiness$Level;
    static values(): Crackiness$Level[];
    private constructor()
    name(): "NONE" | "LOW" | "MEDIUM" | "HIGH";
}