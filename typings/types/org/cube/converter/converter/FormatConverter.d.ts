import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RotationType } from '../../../../org/cube/converter/converter/enums/RotationType.d.ts'
import type { Cube } from '../../../../org/cube/converter/model/element/Cube.d.ts'
import type { BedrockGeometryModel } from '../../../../org/cube/converter/model/impl/bedrock/BedrockGeometryModel.d.ts'
import type { JavaItemModel } from '../../../../org/cube/converter/model/impl/java/JavaItemModel.d.ts'
import type { Direction } from '../../../../org/cube/converter/util/element/Direction.d.ts'
export class FormatConverter extends Object {
    static convertTo1Axis(paramarg0: Cube): void;
    static geometryToItemModel(paramarg0: string, paramarg1: BedrockGeometryModel, paramarg2: RotationType): JavaItemModel;
    static geometryToItemModel(paramarg0: Map<Direction, string>, paramarg1: BedrockGeometryModel, paramarg2: RotationType): JavaItemModel;
    static geometryToMultiItemModel(paramarg0: string, paramarg1: BedrockGeometryModel): JavaItemModel[];
    constructor()
}