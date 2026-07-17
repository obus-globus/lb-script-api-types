import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ArrayBasedEscaperMap extends Object {
    static create(paramreplacements: JavaMap<string, string>): ArrayBasedEscaperMap;
    private constructor(replacementArray: string[][])
    // private replacementArray: string[][];
    getReplacementArray(): string[][];
}