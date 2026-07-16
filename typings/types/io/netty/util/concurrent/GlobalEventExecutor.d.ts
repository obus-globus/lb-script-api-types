import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlobalEventExecutor {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static INSTANCE: (Object | null)[];
}