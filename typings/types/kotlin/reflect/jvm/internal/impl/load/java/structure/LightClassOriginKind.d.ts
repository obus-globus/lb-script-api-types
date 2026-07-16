import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LightClassOriginKind extends Enum<LightClassOriginKind> {
    static BINARY: LightClassOriginKind;
    static SOURCE: LightClassOriginKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LightClassOriginKind;
    static values(): LightClassOriginKind[];
    private constructor()
    name(): "SOURCE" | "BINARY";
}