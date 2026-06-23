import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HoverEvent$EntityTooltipInfo } from '../../../../../../net/minecraft/network/chat/HoverEvent$EntityTooltipInfo.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class HoverNode$EntityNodeContent extends Record {
    constructor(entityType: EntityType<any>, uuid: UUID, name: TextNode)
    // private entityType: EntityType<any>;
    // private name: TextNode;
    // private uuid: UUID;
    entityType(): EntityType<any>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): TextNode;
    toString(): string;
    toVanilla(arg0: ParserContext): HoverEvent$EntityTooltipInfo;
    uuid(): UUID;
}