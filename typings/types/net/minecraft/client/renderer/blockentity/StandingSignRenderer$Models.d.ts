import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Model$Simple } from '../../../../../net/minecraft/client/model/Model$Simple.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { PlainSignBlock$Attachment } from '../../../../../net/minecraft/world/level/block/PlainSignBlock$Attachment.d.ts'
import type { WoodType } from '../../../../../net/minecraft/world/level/block/state/properties/WoodType.d.ts'
export class StandingSignRenderer$Models extends Record {
    static create(paramcontext: BlockEntityRendererProvider$Context, paramtype: WoodType): StandingSignRenderer$Models;
    private constructor(standing: Model$Simple, wall: Model$Simple)
    // private standing: Model$Simple;
    // private wall: Model$Simple;
    equals(o: Object | null): boolean;
    get(attachmentType: PlainSignBlock$Attachment): Model$Simple;
    hashCode(): number;
    standing(): Model$Simple;
    toString(): string;
    wall(): Model$Simple;
}