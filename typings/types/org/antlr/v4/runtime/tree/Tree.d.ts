import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Tree extends Object{
    getChild(arg0: number): Tree;
    getChildCount(): number;
    getParent(): Tree;
    getPayload(): Object;
    toStringTree(): string;
}