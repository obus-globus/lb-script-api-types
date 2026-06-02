import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnbakedModelDeserializer } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/UnbakedModelDeserializer.d.ts'
import type { UnbakedModel } from '../../../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class UnbakedModelDeserializerRegistry extends Object {
    static deserialize(paramarg0: Reader): UnbakedModel;
    static get(paramarg0: Identifier): UnbakedModelDeserializer;
    static register(paramarg0: Identifier, paramarg1: UnbakedModelDeserializer): void;
    constructor()
}