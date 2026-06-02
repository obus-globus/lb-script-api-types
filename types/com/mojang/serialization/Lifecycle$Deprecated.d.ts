import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
export class Lifecycle$Deprecated extends Lifecycle {
    static deprecated(paramarg0: number): Lifecycle;
    static experimental(): Lifecycle;
    static stable(): Lifecycle;
    constructor(arg0: number)
    // private since: number;
    since(): number;
}