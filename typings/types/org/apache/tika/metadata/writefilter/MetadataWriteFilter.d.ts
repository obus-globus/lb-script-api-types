import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MetadataWriteFilter extends Serializable, Object{
    add(arg0: string, arg1: string, arg2: { [key: string]: string[] }): void;
    filterExisting(arg0: { [key: string]: string[] }): void;
    set(arg0: string, arg1: string, arg2: { [key: string]: string[] }): void;
}