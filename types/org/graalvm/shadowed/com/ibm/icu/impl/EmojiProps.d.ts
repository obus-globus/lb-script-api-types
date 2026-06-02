import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class EmojiProps extends Object {
    static INSTANCE: EmojiProps;
    private constructor()
    // private cpTrie: (Object | null)[];
    // private stringTries: string[];
    addPropertyStarts(set: string[]): string[];
    addStrings(which: number, set: string[]): void;
    hasBinaryProperty(s: CharSequence, which: number): boolean;
    hasBinaryProperty(c: number, which: number): boolean;
}