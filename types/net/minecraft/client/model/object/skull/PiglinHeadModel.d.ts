import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { SkullModelBase } from '../../../../../../net/minecraft/client/model/object/skull/SkullModelBase.d.ts'
import type { SkullModelBase$State } from '../../../../../../net/minecraft/client/model/object/skull/SkullModelBase$State.d.ts'
export class PiglinHeadModel extends SkullModelBase {
    static createHeadModel(): MeshDefinition;
    constructor(root: ModelPart)
    // private head: ModelPart;
    // private leftEar: ModelPart;
    // private rightEar: ModelPart;
    setupAnim(state: SkullModelBase$State): void;
}