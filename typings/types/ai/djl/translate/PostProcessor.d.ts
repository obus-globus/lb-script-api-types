import type { TranslatorContext } from '../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PostProcessor<O extends unknown> extends Object{
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): O;
}