import type { AsciiCharTree$Companion } from '../../../../../io/ktor/http/cio/internals/AsciiCharTree$Companion.d.ts'
import type { AsciiCharTree$Node } from '../../../../../io/ktor/http/cio/internals/AsciiCharTree$Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class AsciiCharTree<T extends unknown> extends Object {
    static Companion: AsciiCharTree$Companion;
    constructor(root: AsciiCharTree$Node<T>)
    readonly root: AsciiCharTree$Node<T>;
    search(sequence: CharSequence, fromIdx: number, end: number, lowerCase: boolean, stopPredicate: (param0: string, param1: number) => boolean): T[];
}