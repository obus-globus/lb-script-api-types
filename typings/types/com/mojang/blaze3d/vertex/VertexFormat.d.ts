import type { VertexFormat$Builder } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$Builder.d.ts'
import type { VertexFormatElement } from '../../../../com/mojang/blaze3d/vertex/VertexFormatElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VertexFormatExtensions } from '../../../../net/caffeinemc/mods/sodium/api/vertex/format/VertexFormatExtensions.d.ts'
import type { VertexFormatExtension } from '../../../../net/irisshaders/iris/pipeline/programs/VertexFormatExtension.d.ts'
export class VertexFormat extends Object implements VertexFormatExtensions, VertexFormatExtension {
    static MAX_VERTEX_ELEMENTS: number;
    static builder(paramstepRate: number): VertexFormat$Builder;
    private constructor(elements: VertexFormatElement[], vertexSize: number, stepRate: number)
    // private elementValues: VertexFormatElement[];
    readonly elements: { [key: string]: VertexFormatElement };
    // private sodium$globalId: number;
    readonly stepRate: number;
    readonly vertexSize: number;
    bindAttributesIris(arg0: boolean, arg1: number): void;
    contains(attributeName: string): boolean;
    equals(o: Object | null): boolean;
    getElement(attributeName: string): VertexFormatElement;
    getElements(): VertexFormatElement[];
    getStepRate(): number;
    getVertexSize(): number;
    hashCode(): number;
    sodium$getGlobalId(): number;
    toString(): string;
}