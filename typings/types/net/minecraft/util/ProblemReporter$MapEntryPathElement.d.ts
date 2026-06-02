import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ProblemReporter$PathElement } from '../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
export class ProblemReporter$MapEntryPathElement extends Record implements ProblemReporter$PathElement {
    constructor(name: string, key: string)
    // private key: string;
    // private name: string;
    equals(o: Object | null): boolean;
    get(): string;
    hashCode(): number;
    key(): string;
    name(): string;
    toString(): string;
}