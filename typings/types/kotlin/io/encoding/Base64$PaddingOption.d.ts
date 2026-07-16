import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Base64$PaddingOption extends Enum<Base64$PaddingOption> implements Serializable {
    static ABSENT: Base64$PaddingOption;
    static ABSENT_OPTIONAL: Base64$PaddingOption;
    static PRESENT: Base64$PaddingOption;
    static PRESENT_OPTIONAL: Base64$PaddingOption;
    static getEntries(): Base64$PaddingOption[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Base64$PaddingOption;
    static values(): Base64$PaddingOption[];
    private constructor()
    name(): "PRESENT" | "ABSENT" | "PRESENT_OPTIONAL" | "ABSENT_OPTIONAL";
}