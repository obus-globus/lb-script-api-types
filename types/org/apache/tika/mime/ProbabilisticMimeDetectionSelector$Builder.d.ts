import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProbabilisticMimeDetectionSelector } from '../../../../org/apache/tika/mime/ProbabilisticMimeDetectionSelector.d.ts'
export class ProbabilisticMimeDetectionSelector$Builder extends Object {
    constructor()
    // private extension_neg: number;
    // private extension_trust: number;
    // private magic_neg: number;
    // private magic_trust: number;
    // private meta_neg: number;
    // private meta_trust: number;
    // private priorExtensionFileType: number;
    // private priorMagicFileType: number;
    // private priorMetaFileType: number;
    // private threshold: number;
    build2(): ProbabilisticMimeDetectionSelector;
    extension_neg(arg0: number): ProbabilisticMimeDetectionSelector$Builder;
    extension_trust(arg0: number): ProbabilisticMimeDetectionSelector$Builder;
    magic_neg(arg0: number): ProbabilisticMimeDetectionSelector$Builder;
    magic_trust(arg0: number): ProbabilisticMimeDetectionSelector$Builder;
    meta_neg(arg0: number): ProbabilisticMimeDetectionSelector$Builder;
    meta_trust(arg0: number): ProbabilisticMimeDetectionSelector$Builder;
    priorExtensionFileType(arg0: number): ProbabilisticMimeDetectionSelector$Builder;
    priorMagicFileType(arg0: number): ProbabilisticMimeDetectionSelector$Builder;
    priorMetaFileType(arg0: number): ProbabilisticMimeDetectionSelector$Builder;
    threshold(arg0: number): ProbabilisticMimeDetectionSelector$Builder;
}