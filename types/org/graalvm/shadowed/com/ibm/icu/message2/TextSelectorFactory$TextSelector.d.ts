import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Selector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Selector.d.ts'
export class TextSelectorFactory$TextSelector extends Object implements Selector {
    private constructor()
    // private matches(value: Object, key: string): boolean;
    matches(value: Object, keys: string[], variableOptions: { [key: string]: Object }): string[];
}