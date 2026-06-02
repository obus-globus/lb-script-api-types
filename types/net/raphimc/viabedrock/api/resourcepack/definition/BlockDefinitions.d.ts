import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockDefinitions$BlockDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/BlockDefinitions$BlockDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class BlockDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private blocks: { [key: string]: BlockDefinitions$BlockDefinition };
    blocks(): { [key: string]: BlockDefinitions$BlockDefinition };
    get(arg0: string): BlockDefinitions$BlockDefinition;
}