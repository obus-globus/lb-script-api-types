import type { Stream$ElementType } from '../../../../../../com/llamalad7/mixinextras/lib/semver/util/Stream$ElementType.d.ts'
import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UnexpectedElementException extends RuntimeException {
    constructor(arg0: Object, arg1: number, arg2: Stream$ElementType<Object>[])
    // private expected: Stream$ElementType<Object>[];
    readonly position: number;
    // private unexpected: Object;
    getExpectedElementTypes(): Stream$ElementType<Object>[];
    getPosition(): number;
    getUnexpectedElement(): Object;
    toString(): string;
}