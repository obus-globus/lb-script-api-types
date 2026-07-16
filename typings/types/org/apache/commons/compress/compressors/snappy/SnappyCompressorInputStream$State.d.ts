import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SnappyCompressorInputStream$State extends Enum<SnappyCompressorInputStream$State> {
    static IN_BACK_REFERENCE: SnappyCompressorInputStream$State;
    static IN_LITERAL: SnappyCompressorInputStream$State;
    static NO_BLOCK: SnappyCompressorInputStream$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SnappyCompressorInputStream$State;
    static values(): SnappyCompressorInputStream$State[];
    private constructor()
    name(): "NO_BLOCK" | "IN_LITERAL" | "IN_BACK_REFERENCE";
}