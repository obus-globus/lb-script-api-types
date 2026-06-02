import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParticleDefinitions$ParticleDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/ParticleDefinitions$ParticleDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class ParticleDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private particles: { [key: string]: ParticleDefinitions$ParticleDefinition };
    get(arg0: string): ParticleDefinitions$ParticleDefinition;
    particles(): { [key: string]: ParticleDefinitions$ParticleDefinition };
}