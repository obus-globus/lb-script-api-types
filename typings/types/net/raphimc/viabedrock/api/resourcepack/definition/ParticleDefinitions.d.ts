import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParticleDefinitions$ParticleDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/ParticleDefinitions$ParticleDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class ParticleDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private particles: JavaMap<string, ParticleDefinitions$ParticleDefinition>;
    get(arg0: string): ParticleDefinitions$ParticleDefinition;
    particles(): JavaMap<string, ParticleDefinitions$ParticleDefinition>;
}