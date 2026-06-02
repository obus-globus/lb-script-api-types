import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SelectableEntry extends Object{
    mouseOverBottomLeftQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverBottomRightQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverIcon(relX: number, relY: number, size: number): boolean;
    mouseOverLeftHalf(relX: number, relY: number, size: number): boolean;
    mouseOverRightHalf(relX: number, relY: number, size: number): boolean;
    mouseOverTopLeftQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverTopRightQuarter(relX: number, relY: number, size: number): boolean;
}