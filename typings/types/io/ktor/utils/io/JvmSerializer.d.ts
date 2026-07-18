import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JvmSerializer<T extends unknown> extends Serializable, Object{
    jvmDeserialize(value: number[]): T;
    jvmSerialize(value: T): number[];
}