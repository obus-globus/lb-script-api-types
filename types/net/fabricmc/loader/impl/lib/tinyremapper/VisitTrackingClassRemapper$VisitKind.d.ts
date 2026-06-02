import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class VisitTrackingClassRemapper$VisitKind extends Enum<VisitTrackingClassRemapper$VisitKind> {
    static ANNOTATION: VisitTrackingClassRemapper$VisitKind;
    static ATTRIBUTE: VisitTrackingClassRemapper$VisitKind;
    static END: VisitTrackingClassRemapper$VisitKind;
    static FIELD: VisitTrackingClassRemapper$VisitKind;
    static INITIAL: VisitTrackingClassRemapper$VisitKind;
    static INNER_CLASS: VisitTrackingClassRemapper$VisitKind;
    static METHOD: VisitTrackingClassRemapper$VisitKind;
    static MODULE: VisitTrackingClassRemapper$VisitKind;
    static NEST_HOST: VisitTrackingClassRemapper$VisitKind;
    static NEST_MEMBER: VisitTrackingClassRemapper$VisitKind;
    static OUTER_CLASS: VisitTrackingClassRemapper$VisitKind;
    static PERMITTED_SUBCLASS: VisitTrackingClassRemapper$VisitKind;
    static RECORD_COMPONENT: VisitTrackingClassRemapper$VisitKind;
    static SOURCE: VisitTrackingClassRemapper$VisitKind;
    static TYPE_ANNOTATION: VisitTrackingClassRemapper$VisitKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VisitTrackingClassRemapper$VisitKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "INITIAL" | "SOURCE" | "MODULE" | "NEST_HOST" | "PERMITTED_SUBCLASS" | "OUTER_CLASS" | "ANNOTATION" | "TYPE_ANNOTATION" | "ATTRIBUTE" | "NEST_MEMBER" | "INNER_CLASS" | "RECORD_COMPONENT" | "FIELD" | "METHOD" | "END";
}