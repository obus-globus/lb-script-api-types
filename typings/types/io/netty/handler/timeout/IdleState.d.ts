import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class IdleState extends Enum<IdleState> {
    static ALL_IDLE: IdleState;
    static READER_IDLE: IdleState;
    static WRITER_IDLE: IdleState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IdleState;
    static values(): IdleState[];
    private constructor()
    name(): "READER_IDLE" | "WRITER_IDLE" | "ALL_IDLE";
}