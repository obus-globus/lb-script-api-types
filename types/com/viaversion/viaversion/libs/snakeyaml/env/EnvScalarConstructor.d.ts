import type { LoaderOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/LoaderOptions.d.ts'
import type { TypeDescription } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/TypeDescription.d.ts'
import type { Constructor } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Constructor.d.ts'
import type { SafeConstructor$ConstructUndefined } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/SafeConstructor$ConstructUndefined.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
export class EnvScalarConstructor extends Constructor {
    static ENV_FORMAT: Pattern;
    static ENV_TAG: Tag;
    static undefinedConstructor: SafeConstructor$ConstructUndefined;
    constructor()
    constructor(arg0: TypeDescription, arg1: E[], arg2: LoaderOptions)
    apply(arg0: string, arg1: string, arg2: string, arg3: string): string;
    getEnv(arg0: string): string;
}