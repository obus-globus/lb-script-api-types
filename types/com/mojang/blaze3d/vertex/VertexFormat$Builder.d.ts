import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormatElement } from '../../../../com/mojang/blaze3d/vertex/VertexFormatElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VertexFormat$Builder extends Object {
    private constructor()
    // private elements: ImmutableMap$Builder<string, VertexFormatElement>;
    // private offset: number;
    // private offsets: (Object | null)[];
    add(name: string, element: VertexFormatElement): VertexFormat$Builder;
    build(): VertexFormat;
    padding(bytes: number): VertexFormat$Builder;
}