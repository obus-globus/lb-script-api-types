import type { Record } from '../../../java/lang/Record.d.ts'
import type { ScopedValueContainer } from '../../../jdk/internal/vm/ScopedValueContainer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ScopedValueContainer$BindingsSnapshot extends Record {
    constructor(scopedValueBindings: Object, container: ScopedValueContainer)
    // private container: ScopedValueContainer;
    // private scopedValueBindings: Object;
    container(): ScopedValueContainer;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    scopedValueBindings(): Object;
    toString(): string;
}