import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NNTrainedModel } from '../../../../org/apache/tika/detect/NNTrainedModel.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
export class NNTrainedModelBuilder extends Object {
    constructor()
    readonly numOfHidden: number;
    readonly numOfInputs: number;
    readonly numOfOutputs: number;
    readonly params: number[];
    readonly type: MediaType;
    build(): NNTrainedModel;
    getNumOfHidden(): number;
    getNumOfInputs(): number;
    getNumOfOutputs(): number;
    getParams(): number[];
    getType(): MediaType;
    setNumOfHidden(arg0: number): void;
    setNumOfInputs(arg0: number): void;
    setNumOfOutputs(arg0: number): void;
    setParams(arg0: number[]): void;
    setType(arg0: MediaType): void;
}