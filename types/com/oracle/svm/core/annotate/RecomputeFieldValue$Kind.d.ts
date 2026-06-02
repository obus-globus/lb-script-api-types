import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RecomputeFieldValue$Kind extends Enum<RecomputeFieldValue$Kind> {
    static ArrayBaseOffset: RecomputeFieldValue$Kind;
    static ArrayIndexScale: RecomputeFieldValue$Kind;
    static ArrayIndexShift: RecomputeFieldValue$Kind;
    static AtomicFieldUpdaterOffset: RecomputeFieldValue$Kind;
    static Custom: RecomputeFieldValue$Kind;
    static FieldOffset: RecomputeFieldValue$Kind;
    static FromAlias: RecomputeFieldValue$Kind;
    static Manual: RecomputeFieldValue$Kind;
    static NewInstance: RecomputeFieldValue$Kind;
    static NewInstanceWhenNotNull: RecomputeFieldValue$Kind;
    static None: RecomputeFieldValue$Kind;
    static Reset: RecomputeFieldValue$Kind;
    static StaticFieldBase: RecomputeFieldValue$Kind;
    static TranslateFieldOffset: RecomputeFieldValue$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RecomputeFieldValue$Kind;
    static values(): (Object | null)[];
    private constructor()
    name(): "None" | "Reset" | "NewInstance" | "NewInstanceWhenNotNull" | "FromAlias" | "FieldOffset" | "StaticFieldBase" | "ArrayBaseOffset" | "ArrayIndexScale" | "ArrayIndexShift" | "AtomicFieldUpdaterOffset" | "TranslateFieldOffset" | "Manual" | "Custom";
}