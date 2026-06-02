import type { Object } from '../../java/lang/Object.d.ts'
import type { NodeList } from '../../kotlinx/coroutines/NodeList.d.ts'
export interface Incomplete extends Object{
    /*not mapped: */ isActive(): boolean;
    readonly list: NodeList | null;
}