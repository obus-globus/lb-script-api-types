import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScissorState extends Object {
    constructor()
    // private enabled: boolean;
    // private height: number;
    // private width: number;
    // private x: number;
    // private y: number;
    disable(): void;
    enable(x: number, y: number, width: number, height: number): void;
    enabled(): boolean;
    height(): number;
    width(): number;
    x(): number;
    y(): number;
}