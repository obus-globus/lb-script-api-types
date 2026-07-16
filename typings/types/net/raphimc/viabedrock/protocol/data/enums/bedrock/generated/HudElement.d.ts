import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class HudElement extends Enum<HudElement> {
    static AirBubbles: HudElement;
    static Armor: HudElement;
    static Crosshair: HudElement;
    static Health: HudElement;
    static HorseHealth: HudElement;
    static HotBar: HudElement;
    static Hunger: HudElement;
    static ItemText: HudElement;
    static PaperDoll: HudElement;
    static ProgressBar: HudElement;
    static StatusEffects: HudElement;
    static ToolTips: HudElement;
    static TouchControls: HudElement;
    static getByName(paramarg0: string): HudElement;
    static getByName(paramarg0: string, paramarg1: HudElement): HudElement;
    static getByValue(paramarg0: number): HudElement;
    static getByValue(paramarg0: number, paramarg1: HudElement): HudElement;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HudElement;
    static values(): HudElement[];
    private constructor(arg2: number)
    private constructor(arg2: HudElement)
    readonly value: number;
    getValue(): number;
    name(): "PaperDoll" | "Armor" | "ToolTips" | "TouchControls" | "Crosshair" | "HotBar" | "Health" | "ProgressBar" | "Hunger" | "AirBubbles" | "HorseHealth" | "StatusEffects" | "ItemText";
}