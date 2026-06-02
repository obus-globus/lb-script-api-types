import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { ContextualProvider } from '../../../kotlinx/serialization/modules/ContextualProvider.d.ts'
export class ContextualProvider$Argless extends ContextualProvider {
    constructor(serializer: KSerializer<Object>)
    readonly serializer: KSerializer<Object>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    invoke(typeArgumentsSerializers: KSerializer<Object>[]): KSerializer<Object>;
}