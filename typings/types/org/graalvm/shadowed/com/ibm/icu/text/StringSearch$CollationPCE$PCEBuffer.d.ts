import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StringSearch$CollationPCE$PCEI } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringSearch$CollationPCE$PCEI.d.ts'
export class StringSearch$CollationPCE$PCEBuffer extends Object {
    private constructor()
    // private bufferIndex_: number;
    // private buffer_: StringSearch$CollationPCE$PCEI[];
    empty(): boolean;
    get(): StringSearch$CollationPCE$PCEI;
    put(ce: number, ixLow: number, ixHigh: number): void;
    reset(): void;
}