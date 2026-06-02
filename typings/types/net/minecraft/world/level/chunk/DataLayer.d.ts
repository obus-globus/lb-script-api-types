import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DataLayer extends Object {
    static LAYER_COUNT: number;
    static LAYER_SIZE: number;
    static SIZE: number;
    constructor()
    constructor(data: number[])
    constructor(defaultValue: number)
    data: number[];
    // private defaultValue: number;
    copy(): DataLayer;
    fill(value: number): void;
    // private get(index: number): number;
    get(x: number, y: number, z: number): number;
    getData(): number[];
    isDefinitelyFilledWith(value: number): boolean;
    isDefinitelyHomogenous(): boolean;
    isEmpty(): boolean;
    layerToString(layer: number): string;
    // private set(index: number, val: number): void;
    set(x: number, y: number, z: number, val: number): void;
    toString(): string;
}