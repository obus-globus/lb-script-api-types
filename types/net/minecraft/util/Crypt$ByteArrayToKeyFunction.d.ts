import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Crypt$ByteArrayToKeyFunction<T extends Key> extends Object{
    apply(input: number[]): T;
}