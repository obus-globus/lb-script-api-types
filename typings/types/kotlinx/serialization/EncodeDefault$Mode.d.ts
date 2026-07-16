import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class EncodeDefault$Mode extends Enum<EncodeDefault$Mode> {
    static ALWAYS: EncodeDefault$Mode;
    static NEVER: EncodeDefault$Mode;
    static getEntries(): EncodeDefault$Mode[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EncodeDefault$Mode;
    static values(): EncodeDefault$Mode[];
    private constructor()
    name(): "ALWAYS" | "NEVER";
}