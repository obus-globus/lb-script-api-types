import type { Object } from '../../java/lang/Object.d.ts'
export class ByteOrder extends Object {
    static BIG_ENDIAN: ByteOrder;
    static LITTLE_ENDIAN: ByteOrder;
    static nativeOrder(): ByteOrder;
    private constructor(arg0: string)
    // private name: string;
    toString(): string;
}