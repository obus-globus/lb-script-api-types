import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Unit extends Enum<Unit> {
    static B: Unit;
    static GB: Unit;
    static KB: Unit;
    static MB: Unit;
    static convertTo(parambytes: number, paramunit: Unit): number;
    static getLargest(parambytes: number): Unit;
    static humanReadable(parambytes: number): string;
    static humanReadable(parambytes: number, paramunit: Unit): string;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Unit;
    static values(): Unit[];
    private constructor()
    name(): "B" | "KB" | "MB" | "GB";
}