import type { DestFactor } from '../../../../com/mojang/blaze3d/platform/DestFactor.d.ts'
import type { SourceFactor } from '../../../../com/mojang/blaze3d/platform/SourceFactor.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BlendFunction extends Record {
    static ADDITIVE: BlendFunction;
    static ENTITY_OUTLINE_BLIT: BlendFunction;
    static GLINT: BlendFunction;
    static INVERT: BlendFunction;
    static LIGHTNING: BlendFunction;
    static OVERLAY: BlendFunction;
    static TRANSLUCENT: BlendFunction;
    static TRANSLUCENT_PREMULTIPLIED_ALPHA: BlendFunction;
    constructor(source: SourceFactor, dest: DestFactor)
    constructor(sourceColor: SourceFactor, destColor: DestFactor, sourceAlpha: SourceFactor, destAlpha: DestFactor)
    // private destAlpha: DestFactor;
    // private destColor: DestFactor;
    // private sourceAlpha: SourceFactor;
    // private sourceColor: SourceFactor;
    destAlpha(): DestFactor;
    destColor(): DestFactor;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sourceAlpha(): SourceFactor;
    sourceColor(): SourceFactor;
    toString(): string;
}