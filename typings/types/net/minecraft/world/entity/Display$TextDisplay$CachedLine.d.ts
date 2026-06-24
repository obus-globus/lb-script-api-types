import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class Display$TextDisplay$CachedLine extends Record {
    constructor(contents: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, width: number)
    // private contents: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    // private width: number;
    contents(): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    width(): number;
}