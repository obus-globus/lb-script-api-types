import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityDefinitions$EntityDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/EntityDefinitions$EntityDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class EntityDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private entities: JavaMap<string, EntityDefinitions$EntityDefinition>;
    entities(): JavaMap<string, EntityDefinitions$EntityDefinition>;
    get(arg0: string): EntityDefinitions$EntityDefinition;
}