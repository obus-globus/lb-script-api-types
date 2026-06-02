import type { DumperOptions$FlowStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$FlowStyle.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { NodeEvent } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/NodeEvent.d.ts'
export abstract class CollectionStartEvent extends NodeEvent {
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: Mark, arg4: Mark, arg5: DumperOptions$FlowStyle)
    readonly flowStyle: DumperOptions$FlowStyle;
    readonly implicit: boolean;
    readonly tag: string;
    getArguments(): string;
    getFlowStyle(): DumperOptions$FlowStyle;
    getImplicit(): boolean;
    getTag(): string;
    isFlow(): boolean;
}