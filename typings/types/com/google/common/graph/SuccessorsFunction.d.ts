import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SuccessorsFunction<N extends unknown> extends Object{
    successors(node: N): N[];
}