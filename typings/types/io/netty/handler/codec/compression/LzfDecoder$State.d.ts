import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LzfDecoder$State extends Enum<LzfDecoder$State> {
    static CORRUPTED: LzfDecoder$State;
    static DECOMPRESS_DATA: LzfDecoder$State;
    static INIT_BLOCK: LzfDecoder$State;
    static INIT_ORIGINAL_LENGTH: LzfDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LzfDecoder$State;
    static values(): LzfDecoder$State[];
    private constructor()
    name(): "INIT_BLOCK" | "INIT_ORIGINAL_LENGTH" | "DECOMPRESS_DATA" | "CORRUPTED";
}