import type { MultiBoxDetection$Builder } from '../../../../ai/djl/modality/cv/MultiBoxDetection$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiBoxDetection extends Object {
    static builder(): MultiBoxDetection$Builder;
    constructor(arg0: MultiBoxDetection$Builder)
    // private backgroundId: number;
    // private clip: boolean;
    // private forceSuppress: boolean;
    // private nmsThreshold: number;
    // private nmsTopK: number;
    // private threshold: number;
    detection(arg0: (Object | null)[]): (Object | null)[];
}