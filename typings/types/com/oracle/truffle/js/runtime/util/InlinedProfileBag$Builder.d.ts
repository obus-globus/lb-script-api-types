import type { InlinedProfileBuilder } from '../../../../../../com/oracle/truffle/js/runtime/util/InlinedProfileBuilder.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
export class InlinedProfileBag$Builder extends InlinedProfileBuilder implements AutoCloseable {
    constructor(length: number)
    constructor(offset: number, length: number)
    close(): void;
}