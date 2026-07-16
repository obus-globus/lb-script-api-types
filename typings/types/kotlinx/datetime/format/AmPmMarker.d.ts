import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class AmPmMarker extends Enum<AmPmMarker> {
    static AM: AmPmMarker;
    static PM: AmPmMarker;
    static getEntries(): AmPmMarker[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AmPmMarker;
    static values(): AmPmMarker[];
    private constructor()
    name(): "AM" | "PM";
}