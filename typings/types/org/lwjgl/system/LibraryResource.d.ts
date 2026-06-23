import type { Class } from '../../../java/lang/Class.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../org/lwjgl/system/Configuration.d.ts'
export class LibraryResource extends Object {
    static load(paramarg0: Class<Object>, paramarg1: string, paramarg2: string): Path[][];
    static load(paramarg0: Class<Object>, paramarg1: string, paramarg2: string, paramarg3: boolean): Path[][];
    static load(paramarg0: Class<Object>, paramarg1: string, paramarg2: Configuration<string>, paramarg3: (Object | null)[]): Path[][];
    static load(paramarg0: Class<Object>, paramarg1: string, paramarg2: Configuration<string>, paramarg3: () => Path[][], paramarg4: (Object | null)[]): Path[][];
    static load(paramarg0: string, paramarg1: string): Path[][];
    private constructor()
}