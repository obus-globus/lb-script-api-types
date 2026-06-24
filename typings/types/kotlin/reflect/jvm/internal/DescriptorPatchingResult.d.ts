import type { Object } from '../../../../java/lang/Object.d.ts'
export class DescriptorPatchingResult extends Object {
    constructor(newDescriptor: string, boxedIndices: number[])
    readonly boxedIndices: number[];
    readonly newDescriptor: string;
}