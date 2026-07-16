import type { TextComponent$ComponentConsumer } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent$ComponentConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TranslationComponent$TranslatableContentConsumer extends Object implements TextComponent$ComponentConsumer {
    constructor(arg0: (param0: string) => void, arg1: any)
    // private runnable: (param0: string) => void;
    // private visited: number;
    accept(arg0: string): void;
    withConsumer(arg0: (param0: string) => void): (param0: string) => void;
}