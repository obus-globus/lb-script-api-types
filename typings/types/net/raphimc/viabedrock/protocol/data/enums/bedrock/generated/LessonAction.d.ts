import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LessonAction extends Enum<LessonAction> {
    static Complete: LessonAction;
    static Restart: LessonAction;
    static Start: LessonAction;
    static getByName(paramarg0: string): LessonAction;
    static getByName(paramarg0: string, paramarg1: LessonAction): LessonAction;
    static getByValue(paramarg0: number): LessonAction;
    static getByValue(paramarg0: number, paramarg1: LessonAction): LessonAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LessonAction;
    static values(): LessonAction[];
    private constructor(arg2: number)
    private constructor(arg2: LessonAction)
    readonly value: number;
    getValue(): number;
    name(): "Start" | "Complete" | "Restart";
}