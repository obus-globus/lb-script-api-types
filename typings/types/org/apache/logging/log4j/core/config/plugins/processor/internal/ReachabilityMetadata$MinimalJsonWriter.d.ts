import type { Appendable } from '../../../../../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../../java/lang/CharSequence.d.ts'
export class ReachabilityMetadata$MinimalJsonWriter extends Object {
    constructor(output: Appendable)
    // private output: Appendable;
    writeArrayEnd(): void;
    writeArrayStart(): void;
    writeObjectEnd(): void;
    writeObjectKey(key: CharSequence): void;
    writeObjectStart(): void;
    writeSeparator(): void;
    writeString(input: CharSequence): void;
}