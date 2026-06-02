import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeySupplier<K extends Key> extends Object{
    getKey(): K;
}