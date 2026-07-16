import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { FaceInfo$VertexInfo } from '../../../../net/minecraft/client/renderer/FaceInfo$VertexInfo.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
export class FaceInfo extends Enum<FaceInfo> {
    static DOWN: FaceInfo;
    static EAST: FaceInfo;
    static NORTH: FaceInfo;
    static SOUTH: FaceInfo;
    static UP: FaceInfo;
    static WEST: FaceInfo;
    static fromFacing(paramdirection: Direction): FaceInfo;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FaceInfo;
    static values(): FaceInfo[];
    private constructor(...infos: FaceInfo$VertexInfo[])
    // private infos: FaceInfo$VertexInfo[];
    getVertexInfo(index: number): FaceInfo$VertexInfo;
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST";
}