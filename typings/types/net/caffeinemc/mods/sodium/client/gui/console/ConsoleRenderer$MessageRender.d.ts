import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MessageLevel } from '../../../../../../../net/caffeinemc/mods/sodium/client/console/message/MessageLevel.d.ts'
import type { Style } from '../../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class ConsoleRenderer$MessageRender extends Record {
    // private height: number;
    // private level: MessageLevel;
    // private lines: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    // private opacity: number;
    // private width: number;
    // private x: number;
    // private y: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    height(): number;
    level(): MessageLevel;
    lines(): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    opacity(): number;
    toString(): string;
    width(): number;
    x(): number;
    y(): number;
}