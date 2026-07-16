
export class TBitSet {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static getEmptyInstance(): number[];
    static getNumberOfStaticInstances(): number;
    static getStaticInstance(parami: number): number[];
    static valueOf(...paramvalues: number[]): number[];
}