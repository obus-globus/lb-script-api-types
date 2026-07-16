import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class WordFactoryOpcode extends Enum<WordFactoryOpcode> {
    static FROM_SIGNED: WordFactoryOpcode;
    static FROM_UNSIGNED: WordFactoryOpcode;
    static ZERO: WordFactoryOpcode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): WordFactoryOpcode;
    static values(): WordFactoryOpcode[];
    private constructor()
    name(): "ZERO" | "FROM_UNSIGNED" | "FROM_SIGNED";
}