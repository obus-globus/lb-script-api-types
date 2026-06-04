import type { TextComponent$ComponentConsumer } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent$ComponentConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TranslationComponent$TranslatableContentConsumer extends Object implements TextComponent$ComponentConsumer {
    private constructor(arg0: (param0: Object | null) => void)
    // private runnable: (param0: Object | null) => void;
    // private visited: number;
    accept(arg0: string): void;
    withConsumer(arg0: (param0: Object | null) => void): (param0: Object | null) => void;
}