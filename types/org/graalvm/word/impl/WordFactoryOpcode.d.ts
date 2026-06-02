import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class WordFactoryOpcode extends Enum<WordFactoryOpcode> {
    static FROM_SIGNED: WordFactoryOpcode;
    static FROM_UNSIGNED: WordFactoryOpcode;
    static ZERO: WordFactoryOpcode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): WordFactoryOpcode;
    static values(): (Object | null)[];
    private constructor()
    name(): "ZERO" | "FROM_UNSIGNED" | "FROM_SIGNED";
}