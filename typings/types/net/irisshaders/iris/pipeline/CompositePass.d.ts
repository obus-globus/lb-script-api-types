import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CompositePass extends Enum<CompositePass> {
    static BEGIN: CompositePass;
    static COMPOSITE: CompositePass;
    static DEFERRED: CompositePass;
    static PREPARE: CompositePass;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CompositePass;
    static values(): CompositePass[];
    private constructor()
    name(): "BEGIN" | "PREPARE" | "DEFERRED" | "COMPOSITE";
}