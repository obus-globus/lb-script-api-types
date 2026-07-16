import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class SerializersModuleKt extends Object {
    static getEmptySerializersModule(): SerializersModule;
    static overwriteWith(self: SerializersModule, other: SerializersModule): SerializersModule;
    static plus(self: SerializersModule, other: SerializersModule): SerializersModule;
}