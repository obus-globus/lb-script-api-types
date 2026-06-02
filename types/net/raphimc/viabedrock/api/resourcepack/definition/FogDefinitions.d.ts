import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FogDefinitions$FogDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/FogDefinitions$FogDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class FogDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private fogs: { [key: string]: FogDefinitions$FogDefinition };
    get(arg0: string): FogDefinitions$FogDefinition;
}