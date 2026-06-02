import type { File } from '../../java/io/File.d.ts'
import type { ProcessBuilder$Redirect$Type } from '../../java/lang/ProcessBuilder$Redirect$Type.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ProcessBuilder$Redirect extends Object {
    static DISCARD: ProcessBuilder$Redirect;
    static INHERIT: ProcessBuilder$Redirect;
    static PIPE: ProcessBuilder$Redirect;
    static appendTo(paramarg0: File): ProcessBuilder$Redirect;
    static from(paramarg0: File): ProcessBuilder$Redirect;
    static to(paramarg0: File): ProcessBuilder$Redirect;
    private constructor()
    append(): boolean;
    equals(arg0: Object | null): boolean;
    file(): File;
    hashCode(): number;
    type(): ProcessBuilder$Redirect$Type;
}