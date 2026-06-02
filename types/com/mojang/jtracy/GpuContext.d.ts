import type { Object } from '../../../java/lang/Object.d.ts'
export class GpuContext extends Object {
    constructor(arg0: number)
    // private id: number;
    beginZone(arg0: number, arg1: string, arg2: string, arg3: string, arg4: number): void;
    endZone(arg0: number): void;
    setName(arg0: string): GpuContext;
    submitQueryTimestamp(arg0: number, arg1: number): void;
}