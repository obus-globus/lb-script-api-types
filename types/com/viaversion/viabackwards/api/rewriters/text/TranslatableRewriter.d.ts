import type { ComponentRewriter } from '../../../../../../com/viaversion/viaversion/api/rewriter/ComponentRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TranslatableRewriter extends ComponentRewriter, Object{
    mappedTranslationKey(arg0: string): string;
}