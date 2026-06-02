import type { SafeConstructor } from '../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/SafeConstructor.d.ts'
import type { SafeConstructor$ConstructUndefined } from '../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/SafeConstructor$ConstructUndefined.d.ts'
export class Config$CustomSafeConstructor extends SafeConstructor {
    static undefinedConstructor: SafeConstructor$ConstructUndefined;
    constructor()
}