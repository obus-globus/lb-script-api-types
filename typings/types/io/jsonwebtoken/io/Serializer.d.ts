import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Serializer<T extends Object | number | string | boolean> extends Object{
    serialize(arg0: T): number[];
    serialize(arg0: T, arg1: OutputStream): void;
}