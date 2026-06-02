import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TreeNode extends Object{
    get(arg0: number): TreeNode;
    get(arg0: string): TreeNode;
    isArray(): boolean;
    isObject(): boolean;
    size(): number;
}