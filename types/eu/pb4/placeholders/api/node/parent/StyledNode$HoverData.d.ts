import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { HoverNode$Action } from '../../../../../../eu/pb4/placeholders/api/node/parent/HoverNode$Action.d.ts'
import type { NodeParser } from '../../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HoverEvent } from '../../../../../../net/minecraft/network/chat/HoverEvent.d.ts'
export class StyledNode$HoverData<T extends Object | number | string | boolean> extends Record {
    constructor(action: HoverNode$Action<T, Object>, data: T)
    // private action: HoverNode$Action<T, Object>;
    // private data: T;
    action(): HoverNode$Action<T, Object>;
    data(): T;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isDynamic(): boolean;
    parse(arg0: NodeParser): StyledNode$HoverData<T>;
    toString(): string;
    toVanilla(arg0: ParserContext): HoverEvent;
}