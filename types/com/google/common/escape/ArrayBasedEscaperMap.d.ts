import type { Object } from '../../../../java/lang/Object.d.ts'
export class ArrayBasedEscaperMap extends Object {
    static create(paramreplacements: { [key: string]: string }): ArrayBasedEscaperMap;
    private constructor(replacementArray: string[][])
    // private replacementArray: string[][];
    getReplacementArray(): string[][];
}