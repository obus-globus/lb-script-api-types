import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
export class AppendableOutputStream<T extends Appendable> extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: T)
    readonly appendable: T;
    getAppendable(): T;
    write(arg0: number): void;
}