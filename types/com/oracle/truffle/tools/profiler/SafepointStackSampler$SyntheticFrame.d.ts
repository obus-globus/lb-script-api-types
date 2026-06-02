import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { SafepointStackSampler$CollectionResult } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$CollectionResult.d.ts'
import type { SafepointStackSampler$StackSample } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$StackSample.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SafepointStackSampler$SyntheticFrame extends Object implements SafepointStackSampler$CollectionResult {
    constructor(parent: SafepointStackSampler$SyntheticFrame, stackSample: SafepointStackSampler$StackSample, language: LanguageInfo, message: string)
    // private language: LanguageInfo;
    // private message: string;
    // private parent: SafepointStackSampler$SyntheticFrame;
    // private stackSample: SafepointStackSampler$StackSample;
    // private syntheticFrameCreated: boolean;
    createSample(submitTime: number): SafepointStackSampler$StackSample;
}