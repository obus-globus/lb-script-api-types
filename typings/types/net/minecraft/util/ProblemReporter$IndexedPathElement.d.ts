import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ProblemReporter$PathElement } from '../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
export class ProblemReporter$IndexedPathElement extends Record implements ProblemReporter$PathElement {
    constructor(index: number)
    // private index: number;
    equals(o: Object | null): boolean;
    get(): string;
    hashCode(): number;
    index(): number;
    toString(): string;
}