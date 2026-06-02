import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class EmojiProps extends Object {
    static INSTANCE: EmojiProps;
    private constructor()
    // private cpTrie: (Object | null)[];
    // private stringTries: string[];
    addPropertyStarts(arg0: string[]): string[];
    addStrings(arg0: number, arg1: string[]): void;
    hasBinaryProperty(arg0: CharSequence, arg1: number): boolean;
    hasBinaryProperty(arg0: number, arg1: number): boolean;
}