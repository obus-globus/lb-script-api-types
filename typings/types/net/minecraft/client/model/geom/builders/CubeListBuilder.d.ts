import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CubeDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDefinition.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
export class CubeListBuilder extends Object {
    static create(): CubeListBuilder;
    constructor()
    readonly cubes: CubeDefinition[];
    // private mirror: boolean;
    // private xTexOffs: number;
    // private yTexOffs: number;
    addBox(x0: number, y0: number, z0: number, w: number, h: number, d: number): CubeListBuilder;
    addBox(x0: number, y0: number, z0: number, w: number, h: number, d: number, mirror: boolean): CubeListBuilder;
    addBox(x0: number, y0: number, z0: number, w: number, h: number, d: number, visibleSides: Direction[]): CubeListBuilder;
    addBox(x0: number, y0: number, z0: number, w: number, h: number, d: number, g: CubeDeformation): CubeListBuilder;
    addBox(x0: number, y0: number, z0: number, w: number, h: number, d: number, g: CubeDeformation, xTexScale: number, yTexScale: number): CubeListBuilder;
    addBox(id: string, x0: number, y0: number, z0: number, w: number, h: number, d: number): CubeListBuilder;
    addBox(id: string, x0: number, y0: number, z0: number, w: number, h: number, d: number, g: CubeDeformation): CubeListBuilder;
    addBox(id: string, x0: number, y0: number, z0: number, w: number, h: number, d: number, xTexOffs: number, yTexOffs: number): CubeListBuilder;
    addBox(id: string, x0: number, y0: number, z0: number, w: number, h: number, d: number, g: CubeDeformation, xTexOffs: number, yTexOffs: number): CubeListBuilder;
    getCubes(): CubeDefinition[];
    mirror(): CubeListBuilder;
    mirror(mirror: boolean): CubeListBuilder;
    texOffs(xTexOffs: number, yTexOffs: number): CubeListBuilder;
}