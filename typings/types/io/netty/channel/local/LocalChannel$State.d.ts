import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocalChannel$State extends Enum<LocalChannel$State> {
    static BOUND: LocalChannel$State;
    static CLOSED: LocalChannel$State;
    static CONNECTED: LocalChannel$State;
    static OPEN: LocalChannel$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LocalChannel$State;
    static values(): LocalChannel$State[];
    private constructor()
    name(): "OPEN" | "BOUND" | "CONNECTED" | "CLOSED";
}