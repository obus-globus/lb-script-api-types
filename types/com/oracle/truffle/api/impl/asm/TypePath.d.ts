import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypePath extends Object {
    static ARRAY_ELEMENT: number;
    static INNER_TYPE: number;
    static TYPE_ARGUMENT: number;
    static WILDCARD_BOUND: number;
    static fromString(paramtypePath: string): TypePath;
    constructor(typePathContainer: number[], typePathOffset: number)
    // private typePathContainer: number[];
    // private typePathOffset: number;
    getLength(): number;
    getStep(index: number): number;
    getStepArgument(index: number): number;
    toString(): string;
}