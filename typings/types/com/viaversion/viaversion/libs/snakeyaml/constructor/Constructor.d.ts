import type { LoaderOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/LoaderOptions.d.ts'
import type { TypeDescription } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/TypeDescription.d.ts'
import type { SafeConstructor } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/SafeConstructor.d.ts'
import type { SafeConstructor$ConstructUndefined } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/SafeConstructor$ConstructUndefined.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Constructor extends SafeConstructor {
    static undefinedConstructor: SafeConstructor$ConstructUndefined;
    constructor(arg0: LoaderOptions)
    constructor(arg0: TypeDescription, arg1: LoaderOptions)
    constructor(arg0: TypeDescription, arg1: TypeDescription[], arg2: LoaderOptions)
    constructor(arg0: Class<Object>, arg1: LoaderOptions)
    constructor(arg0: string, arg1: LoaderOptions)
    getClassForName(arg0: string): Class<Object>;
    getClassForNode(arg0: Node): Class<Object>;
}