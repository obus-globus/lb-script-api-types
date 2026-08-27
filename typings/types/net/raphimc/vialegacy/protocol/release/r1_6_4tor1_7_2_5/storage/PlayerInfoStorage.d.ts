import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PlayerInfoStorage extends Object implements StorableObject {
    constructor()
    readonly entityId: number;
    readonly onGround: boolean;
    readonly pitch: number;
    readonly posX: number;
    readonly posY: number;
    readonly posZ: number;
    readonly yaw: number;
    getEntityId(): number;
    getPitch(): number;
    getPosX(): number;
    getPosY(): number;
    getPosZ(): number;
    getYaw(): number;
    onRemove(): void;
    setEntityId(arg0: number): void;
    setOnGround(arg0: boolean): void;
    setPitch(arg0: number): void;
    setPosX(arg0: number): void;
    setPosY(arg0: number): void;
    setPosZ(arg0: number): void;
    setYaw(arg0: number): void;
}