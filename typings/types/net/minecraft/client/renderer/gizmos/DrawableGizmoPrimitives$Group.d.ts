import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DrawableGizmoPrimitives$Line } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Line.d.ts'
import type { DrawableGizmoPrimitives$Point } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Point.d.ts'
import type { DrawableGizmoPrimitives$Quad } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Quad.d.ts'
import type { DrawableGizmoPrimitives$Text } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Text.d.ts'
import type { DrawableGizmoPrimitives$TriangleFan } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$TriangleFan.d.ts'
export class DrawableGizmoPrimitives$Group extends Record {
    private constructor(opaque: boolean)
    constructor(opaque: boolean, lines: DrawableGizmoPrimitives$Line[], quads: DrawableGizmoPrimitives$Quad[], triangleFans: DrawableGizmoPrimitives$TriangleFan[], texts: DrawableGizmoPrimitives$Text[], points: DrawableGizmoPrimitives$Point[])
    // private lines: DrawableGizmoPrimitives$Line[];
    // private opaque: boolean;
    // private points: DrawableGizmoPrimitives$Point[];
    // private quads: DrawableGizmoPrimitives$Quad[];
    // private texts: DrawableGizmoPrimitives$Text[];
    // private triangleFans: DrawableGizmoPrimitives$TriangleFan[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    lines(): DrawableGizmoPrimitives$Line[];
    opaque(): boolean;
    points(): DrawableGizmoPrimitives$Point[];
    quads(): DrawableGizmoPrimitives$Quad[];
    texts(): DrawableGizmoPrimitives$Text[];
    toString(): string;
    triangleFans(): DrawableGizmoPrimitives$TriangleFan[];
}