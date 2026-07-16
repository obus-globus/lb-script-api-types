import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FluentIterable<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static concat<T extends unknown>(paramarg0: T[], paramarg1: T[]): T[];
    static concat<T extends unknown>(paramarg0: T[][]): T[];
}