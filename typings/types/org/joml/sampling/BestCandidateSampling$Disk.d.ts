import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Callback2d } from '../../../org/joml/sampling/Callback2d.d.ts'
export class BestCandidateSampling$Disk extends Object {
    constructor()
    // private numCandidates: number;
    // private numSamples: number;
    // private seed: number;
    generate(arg0: FloatBuffer): BestCandidateSampling$Disk;
    generate(arg0: number[]): BestCandidateSampling$Disk;
    generate(arg0: Callback2d): BestCandidateSampling$Disk;
    numCandidates(arg0: number): BestCandidateSampling$Disk;
    numSamples(arg0: number): BestCandidateSampling$Disk;
    seed(arg0: number): BestCandidateSampling$Disk;
}