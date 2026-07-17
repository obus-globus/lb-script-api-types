import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { GeneralModel } from '../../../../../../org/cube/converter/model/GeneralModel.d.ts'
import type { Cube } from '../../../../../../org/cube/converter/model/element/Cube.d.ts'
import type { Direction } from '../../../../../../org/cube/converter/util/element/Direction.d.ts'
import type { Position2V } from '../../../../../../org/cube/converter/util/element/Position2V.d.ts'
import type { Transformation } from '../../../../../../org/cube/converter/util/minecraft/Transformation.d.ts'
export class JavaItemModel extends GeneralModel {
    static fromJson(paramarg0: JsonObject): JavaItemModel;
    constructor(arg0: string, arg1: Position2V)
    constructor(arg0: string, arg1: Position2V, arg2: Transformation)
    constructor(arg0: JavaMap<Direction, string>, arg1: Position2V)
    readonly defaultTransformation: Transformation;
    readonly scale: number;
    readonly textures: JavaMap<Direction, string>;
    compile(): JsonObject;
    // private compileAxis(arg0: Cube): JsonObject;
    // private compileRotation(arg0: Cube): JsonObject;
    // private compileUV(arg0: number, arg1: number, arg2: Cube): JsonObject;
    getDefaultTransformation(): Transformation;
    getScale(): number;
    getTextures(): JavaMap<Direction, string>;
    setDefaultTransformation(arg0: Transformation): void;
    setScale(arg0: number): void;
}