import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MagicDetector } from '../../../../org/apache/tika/detect/MagicDetector.d.ts'
import type { Clause } from '../../../../org/apache/tika/mime/Clause.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
export class MagicMatch extends Object implements Clause {
    constructor(arg0: MediaType, arg1: string, arg2: string, arg3: string, arg4: string)
    // private detector: MagicDetector;
    // private mask: string;
    // private mediaType: MediaType;
    // private offset: string;
    // private type: string;
    // private value: string;
    eval(arg0: number[]): boolean;
    // private getDetector(): MagicDetector;
    size(): number;
    toString(): string;
}