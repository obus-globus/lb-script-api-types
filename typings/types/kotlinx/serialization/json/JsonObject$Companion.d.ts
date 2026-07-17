import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class JsonObject$Companion extends Object {
    serializer(): KSerializer<JavaMap<any, any>>;
}