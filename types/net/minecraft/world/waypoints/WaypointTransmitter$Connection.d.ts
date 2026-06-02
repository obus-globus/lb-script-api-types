import type { Object } from '../../../../java/lang/Object.d.ts'
export interface WaypointTransmitter$Connection extends Object{
    connect(): void;
    disconnect(): void;
    isBroken(): boolean;
    update(): void;
}