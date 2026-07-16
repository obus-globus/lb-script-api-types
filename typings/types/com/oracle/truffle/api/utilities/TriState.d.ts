import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TriState extends Enum<TriState> {
    static FALSE: TriState;
    static TRUE: TriState;
    static UNDEFINED: TriState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramb: boolean): TriState;
    static valueOf(paramname: string): TriState;
    static values(): TriState[];
    private constructor()
    name(): "TRUE" | "FALSE" | "UNDEFINED";
}