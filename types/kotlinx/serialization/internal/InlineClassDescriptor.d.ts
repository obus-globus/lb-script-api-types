import type { Object } from '../../../java/lang/Object.d.ts'
import type { GeneratedSerializer } from '../../../kotlinx/serialization/internal/GeneratedSerializer.d.ts'
import type { PluginGeneratedSerialDescriptor } from '../../../kotlinx/serialization/internal/PluginGeneratedSerialDescriptor.d.ts'
export class InlineClassDescriptor extends PluginGeneratedSerialDescriptor {
    constructor(name: string, generatedSerializer: GeneratedSerializer<Object>)
    // private isInline: boolean;
    /*not mapped: */ isInline(): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
}