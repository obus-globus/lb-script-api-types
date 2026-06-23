import type { Image$Flag } from '../../../../../ai/djl/modality/cv/Image$Flag.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { Pipeline } from '../../../../../ai/djl/translate/Pipeline.d.ts'
import type { Transform } from '../../../../../ai/djl/translate/Transform.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BaseImageTranslator$BaseBuilder<T extends BaseImageTranslator$BaseBuilder<BaseImageTranslator$BaseBuilder<any>>> extends Object {
    constructor()
    // private batchifier: Batchifier;
    // private flag: Image$Flag;
    // private height: number;
    // private pipeline: Pipeline;
    // private width: number;
    addTransform(arg0: Transform): T;
    configPostProcess(arg0: { [key: string]: Object | null }): void;
    configPreProcess(arg0: { [key: string]: Object | null }): void;
    optBatchifier(arg0: Batchifier): T;
    optFlag(arg0: Image$Flag): T;
    self(): T;
    setImageSize(arg0: number, arg1: number): T;
    setPipeline(arg0: Pipeline): T;
    validate(): void;
}