import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerAuthInputPacket_InputData } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PlayerAuthInputPacket_InputData.d.ts'
import type { Position2f } from '../../../../../net/raphimc/viabedrock/protocol/model/Position2f.d.ts'
import type { Position3f } from '../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
export class MathUtil extends Object {
    static byte2Float(paramarg0: number): number;
    static calculateCameraOrientation(paramarg0: number, paramarg1: number): Position3f;
    static calculateMovementDirections(paramarg0: PlayerAuthInputPacket_InputData[], paramarg1: boolean): Position2f;
    static ceil(paramarg0: number): number;
    static clamp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static clamp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static float2Byte(paramarg0: number): number;
    static floor(paramarg0: number): number;
    static getOrFallback(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static lerp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static randomFloatInclusive(paramarg0: number, paramarg1: number): number;
    static roughlyEquals(paramarg0: number, paramarg1: number): boolean;
    static roughlyEquals(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static wrapDegrees(paramarg0: number): number;
    constructor()
}