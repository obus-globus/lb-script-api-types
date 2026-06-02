import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class SerializersModuleKt extends Object {
    static getEmptySerializersModule(): SerializersModule;
    static overwriteWith(paramarg0: SerializersModule, paramarg1: SerializersModule): SerializersModule;
    static plus(paramarg0: SerializersModule, paramarg1: SerializersModule): SerializersModule;
}