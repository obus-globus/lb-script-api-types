import type { File } from '../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IDecompiler extends Object{
    decompile(arg0: File): void;
}