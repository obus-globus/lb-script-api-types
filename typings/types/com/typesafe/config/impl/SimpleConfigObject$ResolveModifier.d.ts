import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { AbstractConfigValue$Modifier } from '../../../../com/typesafe/config/impl/AbstractConfigValue$Modifier.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { ResolveContext } from '../../../../com/typesafe/config/impl/ResolveContext.d.ts'
import type { ResolveSource } from '../../../../com/typesafe/config/impl/ResolveSource.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleConfigObject$ResolveModifier extends Object implements AbstractConfigValue$Modifier {
    constructor(arg0: ResolveContext, arg1: ResolveSource)
    // private context: ResolveContext;
    // private originalRestrict: Path;
    // private source: ResolveSource;
    modifyChildMayThrow(arg0: string, arg1: AbstractConfigValue): AbstractConfigValue;
}