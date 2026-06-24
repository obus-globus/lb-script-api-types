import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SpriteId extends Record {
    constructor(atlasLocation: Identifier, texture: Identifier)
    // private atlasLocation: Identifier;
    // private texture: Identifier;
    atlasLocation(): Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    renderType(renderType: (param0: Identifier) => RenderType): RenderType;
    texture(): Identifier;
    toString(): string;
}