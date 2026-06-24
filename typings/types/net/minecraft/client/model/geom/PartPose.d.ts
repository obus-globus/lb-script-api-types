import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PartPose extends Record {
    static ZERO: PartPose;
    static offset(paramx: number, paramy: number, paramz: number): PartPose;
    static offsetAndRotation(paramoffsetX: number, paramoffsetY: number, paramoffsetZ: number, paramrotationX: number, paramrotationY: number, paramrotationZ: number): PartPose;
    static rotation(paramx: number, paramy: number, paramz: number): PartPose;
    constructor(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, xScale: number, yScale: number, zScale: number)
    // private x: number;
    // private xRot: number;
    // private xScale: number;
    // private y: number;
    // private yRot: number;
    // private yScale: number;
    // private z: number;
    // private zRot: number;
    // private zScale: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    scaled(factor: number): PartPose;
    scaled(scaleX: number, scaleY: number, scaleZ: number): PartPose;
    toString(): string;
    translated(x: number, y: number, z: number): PartPose;
    withScale(scale: number): PartPose;
    x(): number;
    xRot(): number;
    xScale(): number;
    y(): number;
    yRot(): number;
    yScale(): number;
    z(): number;
    zRot(): number;
    zScale(): number;
}