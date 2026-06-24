import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
export class TemplateFeatureConfiguration$TemplateEntry extends Record {
    static CODEC: Codec<TemplateFeatureConfiguration$TemplateEntry>;
    static of(paramtemplate: Identifier): TemplateFeatureConfiguration$TemplateEntry;
    constructor(template: Identifier, rotations: Rotation[])
    // private rotations: Rotation[];
    // private template: Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    rotations(): Rotation[];
    template(): Identifier;
    toString(): string;
}