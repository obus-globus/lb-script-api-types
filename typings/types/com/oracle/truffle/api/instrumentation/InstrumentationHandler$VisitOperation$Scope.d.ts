import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class InstrumentationHandler$VisitOperation$Scope extends Enum<InstrumentationHandler$VisitOperation$Scope> {
    static ALL: InstrumentationHandler$VisitOperation$Scope;
    static ONLY_MATERIALIZED: InstrumentationHandler$VisitOperation$Scope;
    static ONLY_ORIGINAL: InstrumentationHandler$VisitOperation$Scope;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InstrumentationHandler$VisitOperation$Scope;
    static values(): InstrumentationHandler$VisitOperation$Scope[];
    private constructor()
    name(): "ALL" | "ONLY_ORIGINAL" | "ONLY_MATERIALIZED";
}