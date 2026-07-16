import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Trie2$ValueWidth extends Enum<Trie2$ValueWidth> {
    static BITS_16: Trie2$ValueWidth;
    static BITS_32: Trie2$ValueWidth;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Trie2$ValueWidth;
    static values(): Trie2$ValueWidth[];
    private constructor()
    name(): "BITS_16" | "BITS_32";
}