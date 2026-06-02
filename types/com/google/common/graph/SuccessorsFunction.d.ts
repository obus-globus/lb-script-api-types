import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SuccessorsFunction<N extends Object | number | string | boolean> extends Object{
    successors(node: N): N[];
}