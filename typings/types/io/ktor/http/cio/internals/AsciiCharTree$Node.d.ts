import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AsciiCharTree$Node<T extends unknown> extends Object {
    constructor(ch: string, exact: T[], children: AsciiCharTree$Node<T>[])
    readonly array: (AsciiCharTree$Node<T> | null)[];
    readonly ch: string;
    readonly children: AsciiCharTree$Node<T>[];
    readonly exact: T[];
}