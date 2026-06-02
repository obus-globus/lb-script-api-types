import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DFS$NodeHandler<N extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    afterChildren(arg0: N): void;
    beforeChildren(arg0: N): boolean;
    result(): R;
}