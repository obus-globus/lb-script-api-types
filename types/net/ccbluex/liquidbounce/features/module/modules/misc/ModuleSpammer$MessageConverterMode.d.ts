import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSpammer$MessageConverterMode extends Enum<ModuleSpammer$MessageConverterMode> implements Tagged {
    static Companion: Tagged$Companion;
    static LEET_CONVERTER: ModuleSpammer$MessageConverterMode;
    static NO_CONVERTER: ModuleSpammer$MessageConverterMode;
    static RANDOM_CASE_CONVERTER: ModuleSpammer$MessageConverterMode;
    static RANDOM_SPACE_CONVERTER: ModuleSpammer$MessageConverterMode;
    static getEntries(): ModuleSpammer$MessageConverterMode[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleSpammer$MessageConverterMode;
    static values(): (Object | null)[];
    private constructor(tag: string, convert: Function1<string, string>)
    readonly convert: (param0: string) => string;
    readonly tag: string;
    name(): "NO_CONVERTER" | "LEET_CONVERTER" | "RANDOM_CASE_CONVERTER" | "RANDOM_SPACE_CONVERTER";
}