import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class FeatureRendererType<Submit extends SubmitNode> extends Record {
    static create<Submit extends SubmitNode>(paramname: string): FeatureRendererType<Submit>;
    constructor(id: number, name: string)
    // private id: number;
    // private name: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): number;
    name(): string;
    toString(): string;
}