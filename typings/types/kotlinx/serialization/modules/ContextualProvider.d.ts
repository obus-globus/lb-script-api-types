import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class ContextualProvider extends Object {
    protected constructor()
    invoke(typeArgumentsSerializers: KSerializer<Object>[]): KSerializer<Object>;
}