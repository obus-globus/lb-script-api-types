import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ProblemReporter$PathElement } from '../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
export class ProblemReporter$RootElementPathElement extends Record implements ProblemReporter$PathElement {
    constructor(id: ResourceKey<Object>)
    // private id: ResourceKey<Object>;
    equals(o: Object | null): boolean;
    get(): string;
    hashCode(): number;
    id(): ResourceKey<Object>;
    toString(): string;
}