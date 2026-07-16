import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BrotliMode extends Enum<BrotliMode> {
    static FONT: BrotliMode;
    static GENERIC: BrotliMode;
    static TEXT: BrotliMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BrotliMode;
    static values(): BrotliMode[];
    private constructor()
    name(): "GENERIC" | "TEXT" | "FONT";
}