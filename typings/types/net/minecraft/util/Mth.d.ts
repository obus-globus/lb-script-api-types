import type { UUID } from '../../../java/util/UUID.d.ts'
import type { IntPredicate } from '../../../java/util/function/IntPredicate.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Vec3i } from '../../../net/minecraft/core/Vec3i.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { AABB } from '../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Fraction } from '../../../org/apache/commons/lang3/math/Fraction.d.ts'
import type { Quaternionf } from '../../../org/joml/Quaternionf.d.ts'
import type { Vector3f } from '../../../org/joml/Vector3f.d.ts'
export class Mth extends Object {
    static DEG_TO_RAD: number;
    static EPSILON: number;
    static HALF_PI: number;
    static PI: number;
    static RAD_TO_DEG: number;
    static SIN: number[];
    static SQRT_OF_TWO: number;
    static TWO_PI: number;
    static X_AXIS: Vector3f;
    static Y_AXIS: Vector3f;
    static Z_AXIS: Vector3f;
    static abs(paramv: number): number;
    static abs(paramv: number): number;
    static absMax(parama: number, paramb: number): number;
    static absMax(parama: number, paramb: number): number;
    static absMax(parama: number, paramb: number): number;
    static approach(paramcurrent: number, paramtarget: number, paramincrement: number): number;
    static approachDegrees(paramcurrent: number, paramtarget: number, paramincrement: number): number;
    static atan2(paramy: number, paramx: number): number;
    static binarySearch(paramfrom: number, paramto: number, paramcondition: (param0: number) => kotlin.Boolean): number;
    static catmullrom(paramalpha: number, paramp0: number, paramp1: number, paramp2: number, paramp3: number): number;
    static ceil(paramv: number): number;
    static ceil(paramv: number): number;
    static ceilLong(paramv: number): number;
    static ceillog2(paraminput: number): number;
    static chessboardDistance(paramx0: number, paramz0: number, paramx1: number, paramz1: number): number;
    static clamp(paramvalue: number, parammin: number, parammax: number): number;
    static clamp(paramvalue: number, parammin: number, parammax: number): number;
    static clamp(paramvalue: number, parammin: number, parammax: number): number;
    static clamp(paramvalue: number, parammin: number, parammax: number): number;
    static clampedLerp(paramfactor: number, parammin: number, parammax: number): number;
    static clampedLerp(paramfactor: number, parammin: number, parammax: number): number;
    static clampedMap(paramvalue: number, paramfromMin: number, paramfromMax: number, paramtoMin: number, paramtoMax: number): number;
    static clampedMap(paramvalue: number, paramfromMin: number, paramfromMax: number, paramtoMin: number, paramtoMax: number): number;
    static cos(paramarg0: number): number;
    static createInsecureUUID(paramrandom: RandomSource): UUID;
    static cube(paramx: number): number;
    static degreesDifference(paramfromAngle: number, paramtoAngle: number): number;
    static degreesDifferenceAbs(paramangleA: number, paramangleB: number): number;
    static equal(parama: number, paramb: number): boolean;
    static equal(parama: number, paramb: number): boolean;
    static fastInvCubeRoot(paramx: number): number;
    static fastInvSqrt(paramx: number): number;
    static floor(paramv: number): number;
    static floor(paramv: number): number;
    static floorDiv(parama: number, paramb: number): number;
    static frac(paramnum: number): number;
    static frac(paramnum: number): number;
    static getInt(paraminput: string, paramdef: number): number;
    static getSeed(paramx: number, paramy: number, paramz: number): number;
    static getSeed(paramvec: Vec3i): number;
    static hsvToArgb(paramhue: number, paramsaturation: number, paramvalue: number, paramalpha: number): number;
    static hsvToRgb(paramhue: number, paramsaturation: number, paramvalue: number): number;
    static invSqrt(paramx: number): number;
    static invSqrt(paramx: number): number;
    static inverseLerp(paramvalue: number, parammin: number, parammax: number): number;
    static inverseLerp(paramvalue: number, parammin: number, parammax: number): number;
    static isMultipleOf(paramdividend: number, paramdivisor: number): boolean;
    static isPowerOfTwo(paraminput: number): boolean;
    static length(paramx: number, paramy: number): number;
    static length(paramx: number, paramy: number, paramz: number): number;
    static length(paramx: number, paramy: number): number;
    static lengthSquared(paramx: number, paramy: number): number;
    static lengthSquared(paramx: number, paramy: number, paramz: number): number;
    static lengthSquared(paramx: number, paramy: number, paramz: number): number;
    static lerp(paramalpha1: number, paramp0: number, paramp1: number): number;
    static lerp(paramalpha1: number, paramp0: number, paramp1: number): number;
    static lerp(paramalpha: number, paramp1: Vec3, paramp2: Vec3): Vec3;
    static lerp2(paramalpha1: number, paramalpha2: number, paramx00: number, paramx10: number, paramx01: number, paramx11: number): number;
    static lerp3(paramalpha1: number, paramalpha2: number, paramalpha3: number, paramx000: number, paramx100: number, paramx010: number, paramx110: number, paramx001: number, paramx101: number, paramx011: number, paramx111: number): number;
    static lerpDiscrete(paramalpha1: number, paramp0: number, paramp1: number): number;
    static lerpInt(paramalpha1: number, paramp0: number, paramp1: number): number;
    static lfloor(paramv: number): number;
    static log2(paraminput: number): number;
    static map(paramvalue: number, paramfromMin: number, paramfromMax: number, paramtoMin: number, paramtoMax: number): number;
    static map(paramvalue: number, paramfromMin: number, paramfromMax: number, paramtoMin: number, paramtoMax: number): number;
    static mulAndTruncate(paramfraction: Fraction, paramfactor: number): number;
    static murmurHash3Mixer(paramhash: number): number;
    static nextDouble(paramrandom: RandomSource, parammin: number, parammax: number): number;
    static nextFloat(paramrandom: RandomSource, parammin: number, parammax: number): number;
    static nextInt(paramrandom: RandomSource, paramminInclusive: number, parammaxInclusive: number): number;
    static normal(paramrandom: RandomSource, parammean: number, paramdeviation: number): number;
    static outFromOrigin(paramorigin: number, paramlowerBound: number, paramupperBound: number): IntStream;
    static outFromOrigin(paramorigin: number, paramlowerBound: number, paramupperBound: number, paramstepSize: number): IntStream;
    static packDegrees(paramangle: number): number;
    static positiveCeilDiv(paraminput: number, paramdivisor: number): number;
    static positiveModulo(paraminput: number, parammod: number): number;
    static positiveModulo(paraminput: number, parammod: number): number;
    static positiveModulo(paraminput: number, parammod: number): number;
    static quantize(paramvalue: number, paramquantizeResolution: number): number;
    static randomBetween(paramrandom: RandomSource, parammin: number, parammaxExclusive: number): number;
    static randomBetweenInclusive(paramrandom: RandomSource, parammin: number, parammaxInclusive: number): number;
    static rayIntersectsAABB(paramrayStart: Vec3, paramrayDir: Vec3, paramaabb: AABB): boolean;
    static rotLerp(parama: number, paramfrom: number, paramto: number): number;
    static rotLerp(parama: number, paramfrom: number, paramto: number): number;
    static rotLerpRad(parama: number, paramfrom: number, paramto: number): number;
    static rotateIfNecessary(parambaseAngle: number, paramtargetAngle: number, parammaxAngleDiff: number): number;
    static rotationAroundAxis(paramaxis: Vector3f, paramrotation: Quaternionf, paramresult: Quaternionf): Quaternionf;
    static roundToward(paraminput: number, parammultiple: number): number;
    static sign(paramnumber: number): number;
    static sin(paramarg0: number): number;
    static smallestEncompassingPowerOfTwo(paraminput: number): number;
    static smallestSquareSide(paramitemCount: number): number;
    static smoothstep(paramx: number): number;
    static smoothstepDerivative(paramx: number): number;
    static sqrt(paramx: number): number;
    static square(paramx: number): number;
    static square(paramx: number): number;
    static square(paramx: number): number;
    static square(paramx: number): number;
    static triangleWave(paramindex: number, paramperiod: number): number;
    static unpackDegrees(paramrot: number): number;
    static wobble(paramcoord: number): number;
    static wrapDegrees(paramangle: number): number;
    static wrapDegrees(paramangle: number): number;
    static wrapDegrees(paramangle: number): number;
    static wrapDegrees(paramangle: number): number;
    constructor()
}