import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ForkProxy extends Serializable, Object{
    init(arg0: DataInputStream, arg1: DataOutputStream): void;
}