import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Parent } from '../../../../org/cube/converter/model/element/Parent.d.ts'
import type { Position2V } from '../../../../org/cube/converter/util/element/Position2V.d.ts'
export abstract class GeneralModel extends Object {
    constructor(arg0: Position2V)
    readonly parents: Parent[];
    readonly textureSize: Position2V;
    compile(): JsonObject;
    getParents(): Parent[];
    getTextureSize(): Position2V;
}