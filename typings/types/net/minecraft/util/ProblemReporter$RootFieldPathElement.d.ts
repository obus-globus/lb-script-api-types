import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ProblemReporter$PathElement } from '../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
export class ProblemReporter$RootFieldPathElement extends Record implements ProblemReporter$PathElement {
    constructor(name: string)
    // private name: string;
    equals(o: Object | null): boolean;
    get(): string;
    hashCode(): number;
    name(): string;
    toString(): string;
}