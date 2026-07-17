import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Pack200Utils extends Object {
    static normalize(paramarg0: File): void;
    static normalize(paramarg0: File, paramarg1: File): void;
    static normalize(paramarg0: File, paramarg1: File, paramarg2: JavaMap<string, string>): void;
    static normalize(paramarg0: File, paramarg1: JavaMap<string, string>): void;
    private constructor()
}