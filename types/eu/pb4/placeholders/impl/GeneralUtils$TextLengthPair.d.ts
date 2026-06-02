import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class GeneralUtils$TextLengthPair extends Record {
    static EMPTY: GeneralUtils$TextLengthPair;
    // private length: number;
    // private text: MutableComponent;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    length(): number;
    text(): MutableComponent;
    toString(): string;
}