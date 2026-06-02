import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Callback3d } from '../../../org/joml/sampling/Callback3d.d.ts'
export class BestCandidateSampling$Cube extends Object {
    constructor()
    // private numCandidates: number;
    // private numSamples: number;
    // private seed: number;
    generate(arg0: FloatBuffer): BestCandidateSampling$Cube;
    generate(arg0: number[]): BestCandidateSampling$Cube;
    generate(arg0: Callback3d): BestCandidateSampling$Cube;
    numCandidates(arg0: number): BestCandidateSampling$Cube;
    numSamples(arg0: number): BestCandidateSampling$Cube;
    seed(arg0: number): BestCandidateSampling$Cube;
}