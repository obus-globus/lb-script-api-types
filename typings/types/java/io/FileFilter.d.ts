import type { File } from '../../java/io/File.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface FileFilter extends Object{
    accept(arg0: File): boolean;
}