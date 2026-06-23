import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DFS$NodeHandler<N extends unknown, R extends unknown> extends Object{
    afterChildren(arg0: N): void;
    beforeChildren(arg0: N): boolean;
    result(): R;
}