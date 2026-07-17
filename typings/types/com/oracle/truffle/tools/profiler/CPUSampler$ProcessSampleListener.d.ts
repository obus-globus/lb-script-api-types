import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CPUSampler$ProcessSampleListener extends Object{
    onSampleProcessed(context: TruffleContext): void;
}