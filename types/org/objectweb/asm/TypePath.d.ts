import type { Object } from '../../../java/lang/Object.d.ts'
export class TypePath extends Object {
    static ARRAY_ELEMENT: number;
    static INNER_TYPE: number;
    static TYPE_ARGUMENT: number;
    static WILDCARD_BOUND: number;
    static fromString(paramarg0: string): TypePath;
    constructor(arg0: number[], arg1: number)
    // private typePathContainer: number[];
    // private typePathOffset: number;
    getLength(): number;
    getStep(arg0: number): number;
    getStepArgument(arg0: number): number;
    toString(): string;
}