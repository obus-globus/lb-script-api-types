import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AnchorPoint extends Enum<AnchorPoint> {
    static BOTTOM_CENTER: AnchorPoint;
    static BOTTOM_LEFT: AnchorPoint;
    static BOTTOM_RIGHT: AnchorPoint;
    static CENTER: AnchorPoint;
    static CENTER_LEFT: AnchorPoint;
    static CENTER_RIGHT: AnchorPoint;
    static TOP_CENTER: AnchorPoint;
    static TOP_LEFT: AnchorPoint;
    static TOP_RIGHT: AnchorPoint;
    static getEntries(): AnchorPoint[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AnchorPoint;
    static values(): AnchorPoint[];
    private constructor(xFactor: number, yFactor: number)
    // private xFactor: number;
    /*not mapped: */ getXFactor(): number;
    // private yFactor: number;
    /*not mapped: */ getYFactor(): number;
    name(): "TOP_LEFT" | "TOP_CENTER" | "TOP_RIGHT" | "CENTER_LEFT" | "CENTER" | "CENTER_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_CENTER" | "BOTTOM_RIGHT";
}