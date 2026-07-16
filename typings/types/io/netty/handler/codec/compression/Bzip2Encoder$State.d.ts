import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Bzip2Encoder$State extends Enum<Bzip2Encoder$State> {
    static CLOSE_BLOCK: Bzip2Encoder$State;
    static INIT: Bzip2Encoder$State;
    static INIT_BLOCK: Bzip2Encoder$State;
    static WRITE_DATA: Bzip2Encoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Bzip2Encoder$State;
    static values(): Bzip2Encoder$State[];
    private constructor()
    name(): "INIT" | "INIT_BLOCK" | "WRITE_DATA" | "CLOSE_BLOCK";
}