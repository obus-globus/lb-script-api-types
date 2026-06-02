import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Crackiness$Level extends Enum<Crackiness$Level> {
    static HIGH: Crackiness$Level;
    static LOW: Crackiness$Level;
    static MEDIUM: Crackiness$Level;
    static NONE: Crackiness$Level;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Crackiness$Level;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "LOW" | "MEDIUM" | "HIGH";
}