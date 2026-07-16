import type { Object } from '../../../../java/lang/Object.d.ts'
export class FluentIterable<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static concat<T extends unknown>(parama: T[], paramb: T[]): T[];
    static concat<T extends unknown>(parama: T[], paramb: T[], paramc: T[]): T[];
    static concat<T extends unknown>(parama: T[], paramb: T[], paramc: T[], paramd: T[]): T[];
    static concat<T extends unknown>(...paraminputs: T[][]): T[];
    static concat<T extends unknown>(paraminputs: T[][]): T[];
    static from<E extends unknown>(paramelements: E[]): E[];
    static from<E extends unknown>(paramiterable: E[]): E[];
    static of<E extends unknown>(): E[];
    static of<E extends unknown>(paramelement: E, ...paramelements: E[]): E[];
}