import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NDList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static decode(paramarg0: NDManager, paramarg1: number[]): (Object | null)[];
    static decode(paramarg0: NDManager, paramarg1: InputStream): (Object | null)[];
}