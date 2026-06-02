import type { Object } from '../../java/lang/Object.d.ts'
import type { AbstractCoroutineContextElement } from '../../kotlin/coroutines/AbstractCoroutineContextElement.d.ts'
import type { CoroutineName$Key } from '../../kotlinx/coroutines/CoroutineName$Key.d.ts'
export class CoroutineName extends AbstractCoroutineContextElement {
    static Key: CoroutineName$Key;
    constructor(name: string)
    readonly name: string;
    component1(): string;
    copy(name: string): CoroutineName;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}