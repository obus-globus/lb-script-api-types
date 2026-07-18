import type { AsciiCharTree } from '../../../../../io/ktor/http/cio/internals/AsciiCharTree.d.ts'
import type { AsciiCharTree$Node } from '../../../../../io/ktor/http/cio/internals/AsciiCharTree$Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class AsciiCharTree$Companion extends Object {
    build<T extends CharSequence>(from: T[]): AsciiCharTree<T>;
    build<T extends unknown>(from: T[], length: (param0: T) => number, charAt: (param0: T, param1: number) => string): AsciiCharTree<T>;
    // private build<T extends unknown>(resultList: AsciiCharTree$Node<T>[], from: T[], maxLength: number, idx: number, length: (param0: T) => number, charAt: (param0: T, param1: number) => string): void;
}