import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { ContextualProvider } from '../../../kotlinx/serialization/modules/ContextualProvider.d.ts'
export class ContextualProvider$WithTypeArguments extends ContextualProvider {
    constructor(provider: Function1<KSerializer<Object>[], KSerializer<Object>>)
    readonly provider: (param0: KSerializer<Object>[]) => KSerializer<Object>;
    invoke(typeArgumentsSerializers: KSerializer<Object>[]): KSerializer<Object>;
}