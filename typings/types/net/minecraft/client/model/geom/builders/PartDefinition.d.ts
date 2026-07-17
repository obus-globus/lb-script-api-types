import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { PartPose } from '../../../../../../net/minecraft/client/model/geom/PartPose.d.ts'
import type { CubeDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDefinition.d.ts'
import type { CubeListBuilder } from '../../../../../../net/minecraft/client/model/geom/builders/CubeListBuilder.d.ts'
export class PartDefinition extends Object {
    constructor(cubes: CubeDefinition[], partPose: PartPose)
    readonly children: JavaMap<string, PartDefinition>;
    // private cubes: CubeDefinition[];
    // private partPose: PartPose;
    addOrReplaceChild(name: string, cubes: CubeListBuilder, partPose: PartPose): PartDefinition;
    addOrReplaceChild(name: string, child: PartDefinition): PartDefinition;
    bake(texScaleX: number, texScaleY: number): ModelPart;
    clearChild(name: string): PartDefinition;
    clearRecursively(): PartDefinition;
    getChild(name: string): PartDefinition;
    getChildren(): Map$Entry<string, PartDefinition>[];
    retainExactParts(parts: string[]): void;
    retainPartsAndChildren(parts: string[]): void;
    transformed(function_: (param0: PartPose) => PartPose): PartDefinition;
}