import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { RotationType } from '../../../../../../org/cube/converter/converter/enums/RotationType.d.ts'
import type { GeneralModel } from '../../../../../../org/cube/converter/model/GeneralModel.d.ts'
import type { JavaItemModel } from '../../../../../../org/cube/converter/model/impl/java/JavaItemModel.d.ts'
import type { Direction } from '../../../../../../org/cube/converter/util/element/Direction.d.ts'
import type { Position2V } from '../../../../../../org/cube/converter/util/element/Position2V.d.ts'
export class BedrockGeometryModel extends GeneralModel {
    static fromJson(paramarg0: JsonObject): BedrockGeometryModel[];
    static fromJson(paramarg0: string): BedrockGeometryModel[];
    constructor(arg0: string, arg1: Position2V)
    readonly identifier: string;
    compile(): JsonObject;
    getIdentifier(): string;
    toJavaItemModel(arg0: string, arg1: RotationType): JavaItemModel;
    toJavaItemModel(arg0: Map<Direction, string>, arg1: RotationType): JavaItemModel;
    toJavaMultiItemModel(arg0: string): JavaItemModel[];
}