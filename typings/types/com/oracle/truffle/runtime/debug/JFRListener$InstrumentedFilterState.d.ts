import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class JFRListener$InstrumentedFilterState extends Enum<JFRListener$InstrumentedFilterState> {
    static ACTIVE: JFRListener$InstrumentedFilterState;
    static INACTIVE: JFRListener$InstrumentedFilterState;
    static NEW: JFRListener$InstrumentedFilterState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JFRListener$InstrumentedFilterState;
    static values(): JFRListener$InstrumentedFilterState[];
    private constructor()
    name(): "NEW" | "ACTIVE" | "INACTIVE";
}