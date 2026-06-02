import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MeshDefinition } from '../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
export class BabyModelTransform extends Record implements MeshTransformer {
    static IDENTITY: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static scaling(paramfactor: number): (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    // private babyBodyScale: number;
    // private babyHeadScale: number;
    // private babyYHeadOffset: number;
    // private babyZHeadOffset: number;
    // private bodyYOffset: number;
    // private headParts: string[];
    // private scaleHead: boolean;
    apply(mesh: MeshDefinition): MeshDefinition;
    babyBodyScale(): number;
    babyHeadScale(): number;
    babyYHeadOffset(): number;
    babyZHeadOffset(): number;
    bodyYOffset(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    headParts(): string[];
    scaleHead(): boolean;
    toString(): string;
}