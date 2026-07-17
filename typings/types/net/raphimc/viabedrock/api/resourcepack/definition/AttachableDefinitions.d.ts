import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachableDefinitions$AttachableDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/AttachableDefinitions$AttachableDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class AttachableDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private attachables: JavaMap<string, AttachableDefinitions$AttachableDefinition>;
    attachables(): JavaMap<string, AttachableDefinitions$AttachableDefinition>;
}