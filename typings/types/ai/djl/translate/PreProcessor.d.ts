import type { TranslatorContext } from '../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PreProcessor<I extends unknown> extends Object{
    processInput(arg0: TranslatorContext, arg1: I): (Object | null)[];
}