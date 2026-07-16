import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SoundDataEvent extends Enum<SoundDataEvent> {
    static Stop: SoundDataEvent;
    static getByName(paramarg0: string): SoundDataEvent;
    static getByName(paramarg0: string, paramarg1: SoundDataEvent): SoundDataEvent;
    static getByValue(paramarg0: number): SoundDataEvent;
    static getByValue(paramarg0: number, paramarg1: SoundDataEvent): SoundDataEvent;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SoundDataEvent;
    static values(): SoundDataEvent[];
    private constructor(arg2: number)
    private constructor(arg2: SoundDataEvent)
    readonly value: number;
    getValue(): number;
    name(): "Stop";
}