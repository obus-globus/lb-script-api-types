import type { SafeConstructor$ConstructUndefined } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/SafeConstructor$ConstructUndefined.d.ts'
import type { CompactConstructor } from '../../../../../../../com/viaversion/viaversion/libs/snakeyaml/extensions/compactnotation/CompactConstructor.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PackageCompactConstructor extends CompactConstructor {
    static undefinedConstructor: SafeConstructor$ConstructUndefined;
    constructor(arg0: string)
    // private packageName: string;
    getClassForName(arg0: string): Class<Object>;
}