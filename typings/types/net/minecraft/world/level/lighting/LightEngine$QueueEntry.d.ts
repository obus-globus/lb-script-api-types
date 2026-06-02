import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
export class LightEngine$QueueEntry extends Object {
    static decreaseAllDirections(paramoldFromLevel: number): number;
    static decreaseSkipOneDirection(paramoldFromLevel: number, paramskipDirection: Direction): number;
    static getFromLevel(paramentry: number): number;
    static increaseLightFromEmission(paramnewFromLevel: number, paramfromEmptyShape: boolean): number;
    static increaseOnlyOneDirection(paramnewFromLevel: number, paramfromEmptyShape: boolean, paramdirection: Direction): number;
    static increaseSkipOneDirection(paramnewFromLevel: number, paramfromEmptyShape: boolean, paramskipDirection: Direction): number;
    static increaseSkySourceInDirections(paramdown: boolean, paramnorth: boolean, paramsouth: boolean, paramwest: boolean, parameast: boolean): number;
    static isFromEmptyShape(paramentry: number): boolean;
    static isIncreaseFromEmission(paramentry: number): boolean;
    static shouldPropagateInDirection(paramentry: number, paramdirection: Direction): boolean;
    constructor()
}