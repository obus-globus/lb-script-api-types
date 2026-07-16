import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EmbeddedChannel$State extends Enum<EmbeddedChannel$State> {
    static ACTIVE: EmbeddedChannel$State;
    static CLOSED: EmbeddedChannel$State;
    static OPEN: EmbeddedChannel$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EmbeddedChannel$State;
    static values(): EmbeddedChannel$State[];
    private constructor()
    name(): "OPEN" | "ACTIVE" | "CLOSED";
}