import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RakPriority extends Enum<RakPriority> {
    static HIGH: RakPriority;
    static IMMEDIATE: RakPriority;
    static LOW: RakPriority;
    static NORMAL: RakPriority;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RakPriority;
    static values(): RakPriority[];
    private constructor()
    name(): "IMMEDIATE" | "HIGH" | "NORMAL" | "LOW";
}