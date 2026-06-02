import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TooltipFlag } from '../../../../net/minecraft/world/item/TooltipFlag.d.ts'
export class TooltipFlag$Default extends Record implements TooltipFlag {
    static ADVANCED: TooltipFlag$Default;
    static NORMAL: TooltipFlag$Default;
    readonly advanced: boolean;
    readonly creative: boolean;
    advanced(): boolean;
    asCreative(): TooltipFlag$Default;
    creative(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isAdvanced(): boolean;
    isCreative(): boolean;
    toString(): string;
}