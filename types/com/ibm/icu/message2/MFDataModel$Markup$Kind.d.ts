import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MFDataModel$Markup$Kind extends Enum<MFDataModel$Markup$Kind> {
    static CLOSE: MFDataModel$Markup$Kind;
    static OPEN: MFDataModel$Markup$Kind;
    static STANDALONE: MFDataModel$Markup$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MFDataModel$Markup$Kind;
    static values(): (Object | null)[];
    private constructor()
    name(): "OPEN" | "CLOSE" | "STANDALONE";
}