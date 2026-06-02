import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FieldNamingStrategy } from '../../../../../../org/spongepowered/include/com/google/gson/FieldNamingStrategy.d.ts'
import type { Gson } from '../../../../../../org/spongepowered/include/com/google/gson/Gson.d.ts'
import type { InstanceCreator } from '../../../../../../org/spongepowered/include/com/google/gson/InstanceCreator.d.ts'
import type { LongSerializationPolicy } from '../../../../../../org/spongepowered/include/com/google/gson/LongSerializationPolicy.d.ts'
import type { TypeAdapterFactory } from '../../../../../../org/spongepowered/include/com/google/gson/TypeAdapterFactory.d.ts'
import type { Excluder } from '../../../../../../org/spongepowered/include/com/google/gson/internal/Excluder.d.ts'
export class GsonBuilder extends Object {
    constructor()
    // private complexMapKeySerialization: boolean;
    // private datePattern: string;
    // private dateStyle: number;
    // private escapeHtmlChars: boolean;
    // private excluder: Excluder;
    // private factories: TypeAdapterFactory[];
    // private fieldNamingPolicy: FieldNamingStrategy;
    // private generateNonExecutableJson: boolean;
    // private hierarchyFactories: TypeAdapterFactory[];
    // private instanceCreators: Map<Type, InstanceCreator<Object>>;
    // private longSerializationPolicy: LongSerializationPolicy;
    // private prettyPrinting: boolean;
    // private serializeNulls: boolean;
    // private serializeSpecialFloatingPointValues: boolean;
    // private timeStyle: number;
    // private addTypeAdaptersForDate(arg0: string, arg1: number, arg2: number, arg3: TypeAdapterFactory[]): void;
    create(): Gson;
    disableHtmlEscaping(): GsonBuilder;
    setPrettyPrinting(): GsonBuilder;
}