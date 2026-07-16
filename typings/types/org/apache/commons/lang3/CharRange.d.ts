
export class CharRange {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static is(paramarg0: string): string[];
    static isIn(paramarg0: string, paramarg1: string): string[];
    static isNot(paramarg0: string): string[];
    static isNotIn(paramarg0: string, paramarg1: string): string[];
}