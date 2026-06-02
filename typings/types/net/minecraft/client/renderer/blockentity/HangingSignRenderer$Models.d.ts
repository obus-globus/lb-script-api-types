import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Model$Simple } from '../../../../../net/minecraft/client/model/Model$Simple.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { HangingSignBlock$Attachment } from '../../../../../net/minecraft/world/level/block/HangingSignBlock$Attachment.d.ts'
import type { WoodType } from '../../../../../net/minecraft/world/level/block/state/properties/WoodType.d.ts'
export class HangingSignRenderer$Models extends Record {
    static create(paramcontext: BlockEntityRendererProvider$Context, paramtype: WoodType): HangingSignRenderer$Models;
    private constructor(ceiling: Model$Simple, ceilingMiddle: Model$Simple, wall: Model$Simple)
    // private ceiling: Model$Simple;
    // private ceilingMiddle: Model$Simple;
    // private wall: Model$Simple;
    ceiling(): Model$Simple;
    ceilingMiddle(): Model$Simple;
    equals(o: Object | null): boolean;
    get(attachmentType: HangingSignBlock$Attachment): Model$Simple;
    hashCode(): number;
    toString(): string;
    wall(): Model$Simple;
}