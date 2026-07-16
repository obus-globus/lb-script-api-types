import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UnicodeProperties$NameMatchingMode extends Enum<UnicodeProperties$NameMatchingMode> {
    static exact: UnicodeProperties$NameMatchingMode;
    static ignoreCase: UnicodeProperties$NameMatchingMode;
    static ruby: UnicodeProperties$NameMatchingMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): UnicodeProperties$NameMatchingMode;
    static values(): UnicodeProperties$NameMatchingMode[];
    private constructor()
    normalize(name: string): string;
    name(): "exact" | "ignoreCase" | "ruby";
}