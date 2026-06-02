import type { DumperOptions$ScalarStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$ScalarStyle.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Event$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event$ID.d.ts'
import type { ImplicitTuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/ImplicitTuple.d.ts'
import type { NodeEvent } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/NodeEvent.d.ts'
export class ScalarEvent extends NodeEvent {
    constructor(arg0: string, arg1: string, arg2: ImplicitTuple, arg3: string, arg4: Mark, arg5: Mark, arg6: DumperOptions$ScalarStyle)
    readonly implicit: ImplicitTuple;
    // private style: DumperOptions$ScalarStyle;
    readonly tag: string;
    readonly value: string;
    getArguments(): string;
    getEventId(): Event$ID;
    getImplicit(): ImplicitTuple;
    getScalarStyle(): DumperOptions$ScalarStyle;
    getTag(): string;
    getValue(): string;
    isDQuoted(): boolean;
    isFolded(): boolean;
    isJson(): boolean;
    isLiteral(): boolean;
    isPlain(): boolean;
    isSQuoted(): boolean;
}