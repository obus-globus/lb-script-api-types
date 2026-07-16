import type { Object } from '../../../java/lang/Object.d.ts'
export class Arrays extends Object {
    static asList<T extends unknown>(paramarg0: T[]): T[];
    static clean(paramarg0: number[]): number[];
    static copy(paramarg0: Object): Object;
    static length<T extends unknown>(paramarg0: T[]): number;
    static length(paramarg0: number[]): number;
    private constructor()
}