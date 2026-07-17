import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
import type { BedrockGeometryModel } from '../../../../../../org/cube/converter/model/impl/bedrock/BedrockGeometryModel.d.ts'
export class ModelDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private entityModels: JavaMap<string, BedrockGeometryModel>;
    entityModels(): JavaMap<string, BedrockGeometryModel>;
    getEntityModel(arg0: string): BedrockGeometryModel;
}