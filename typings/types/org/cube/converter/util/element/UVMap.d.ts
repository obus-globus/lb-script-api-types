import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../org/cube/converter/util/element/Direction.d.ts'
import type { Position3V } from '../../../../../org/cube/converter/util/element/Position3V.d.ts'
import type { UVMap$UVType } from '../../../../../org/cube/converter/util/element/UVMap$UVType.d.ts'
export class UVMap extends Object {
    static fromBoxUV(paramarg0: Position3V, paramarg1: number[], paramarg2: boolean): UVMap;
    static fromPerfaceUV(paramarg0: JsonObject): UVMap;
    private constructor(arg0: UVMap$UVType)
    readonly uvMap: Map<Direction, number[]>;
    readonly uvRotation: Map<Direction, number>;
    readonly uvType: UVMap$UVType;
    clone(): UVMap;
    getUvMap(): Map<Direction, number[]>;
    getUvRotation(): Map<Direction, number>;
    getUvType(): UVMap$UVType;
    rotate(arg0: Direction, arg1: number): void;
    toJavaPerfaceUV(arg0: number, arg1: number): UVMap;
}