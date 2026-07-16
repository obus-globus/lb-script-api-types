import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class AmPmMarker extends Enum<AmPmMarker> {
    static AM: AmPmMarker;
    static PM: AmPmMarker;
    static getEntries(): AmPmMarker[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AmPmMarker;
    static values(): AmPmMarker[];
    private constructor()
    name(): "AM" | "PM";
}