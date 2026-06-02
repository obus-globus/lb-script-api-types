import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PlayerTabOverlay$HealthState extends Object {
    constructor(value: number)
    // private blinkUntilTick: number;
    // private displayedValue: number;
    // private lastUpdateTick: number;
    // private lastValue: number;
    displayedValue(): number;
    isBlinking(tick: number): boolean;
    update(value: number, tick: number): void;
}