import type { MultiBoxDetection } from '../../../../ai/djl/modality/cv/MultiBoxDetection.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiBoxDetection$Builder extends Object {
    constructor()
    // private backgroundId: number;
    // private clip: boolean;
    // private forceSuppress: boolean;
    // private nmsThreshold: number;
    // private nmsTopK: number;
    // private threshold: number;
    build(): MultiBoxDetection;
    optBackgroundId(arg0: number): MultiBoxDetection$Builder;
    optClip(arg0: boolean): MultiBoxDetection$Builder;
    optForceSuppress(arg0: boolean): MultiBoxDetection$Builder;
    optNmsThreshold(arg0: number): MultiBoxDetection$Builder;
    optNmsTopK(arg0: number): MultiBoxDetection$Builder;
    optThreshold(arg0: number): MultiBoxDetection$Builder;
}