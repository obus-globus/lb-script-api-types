import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSpammer$MessageConverterMode extends Enum<ModuleSpammer$MessageConverterMode> implements Tagged {
    static Companion: Tagged$Companion;
    static LEET_CONVERTER: ModuleSpammer$MessageConverterMode;
    static NO_CONVERTER: ModuleSpammer$MessageConverterMode;
    static RANDOM_CASE_CONVERTER: ModuleSpammer$MessageConverterMode;
    static RANDOM_SPACE_CONVERTER: ModuleSpammer$MessageConverterMode;
    static getEntries(): ModuleSpammer$MessageConverterMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleSpammer$MessageConverterMode;
    static values(): ModuleSpammer$MessageConverterMode[];
    private constructor(tag: string, convert: (param0: string) => string)
    readonly convert: (param0: string) => string;
    readonly tag: string;
    name(): "NO_CONVERTER" | "LEET_CONVERTER" | "RANDOM_CASE_CONVERTER" | "RANDOM_SPACE_CONVERTER";
}